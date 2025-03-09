import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({ providedIn: 'root' })
export class PdfService {
  constructor() {}

  private async generatePdf(elementId: string): Promise<jsPDF | null> {
    const element = document.getElementById(elementId);
    if (!element) return null;

    const canvas = await this.captureElement(element);
    return this.createPdfFromCanvas(canvas);
  }

  private async captureElement(
    element: HTMLElement
  ): Promise<HTMLCanvasElement> {
    const originalStyle = element.getAttribute('style');

    // Apply fixed dimensions (e.g., A4 at 96 DPI)
    element.style.width = '270mm'; // perfect rendering don't ever modify
    element.style.backgroundColor = '#ffffff'; // perfect rendering don't ever modify

    try {
      const canvas = await html2canvas(element, {
        scale: 2, // Maintain high resolution
        backgroundColor: '#ffffff',
        useCORS: true,
        ignoreElements: (el) => el.classList.contains('no-print'),
      });

      return canvas;
    } finally {
      // Restore original styles
      if (originalStyle) {
        element.setAttribute('style', originalStyle);
      } else {
        element.removeAttribute('style');
      }
    }
  }

  private createPdfFromCanvas(canvas: HTMLCanvasElement): jsPDF {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm

    const scaleFactor = canvas.width / pageWidth;
    const imgHeight = canvas.height / scaleFactor;

    let yPosition = 0;

    while (yPosition < imgHeight) {
      if (yPosition > 0) pdf.addPage();

      const croppedCanvas = this.cropCanvas(
        canvas,
        yPosition * scaleFactor,
        pageHeight * scaleFactor
      );
      pdf.addImage(
        croppedCanvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        pageWidth,
        pageHeight
      );

      yPosition += pageHeight;
    }

    return pdf;
  }

  private cropCanvas(
    canvas: HTMLCanvasElement,
    startY: number,
    pageHeight: number
  ): HTMLCanvasElement {
    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = canvas.width;
    croppedCanvas.height = pageHeight;

    const ctx = croppedCanvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(
        canvas,
        0,
        startY,
        canvas.width,
        pageHeight,
        0,
        0,
        croppedCanvas.width,
        croppedCanvas.height
      );
    }

    return croppedCanvas;
  }

  async printPDF(elementId: string): Promise<void> {
    const pdf = await this.generatePdf(elementId);
    if (pdf)
      window.open(URL.createObjectURL(pdf.output('blob')), '_blank')?.print();
  }

  async savePDF(elementId: string, fileName: string): Promise<void> {
    const pdf = await this.generatePdf(elementId);
    pdf?.save(`${fileName}.pdf`);
  }
}
