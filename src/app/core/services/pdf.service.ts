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
    return this.createPdfFromCanvas(canvas, element);
  }

  private async captureElement(
    element: HTMLElement
  ): Promise<HTMLCanvasElement> {
    return await html2canvas(element, {
      scale: 2,
      backgroundColor:
        window.getComputedStyle(element).backgroundColor || '#ffffff',
      ignoreElements: (el) => el.classList.contains('no-print'),
    });
  }

  private createPdfFromCanvas(
    canvas: HTMLCanvasElement,
    element: HTMLElement
  ): jsPDF {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const pageWidth = 210,
      pageHeight = 297;
    const imgWidth = pageWidth;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let yPosition = 0;
    const marginTop = 20,
      bottomMargin = 15;

    const breakPositions = this.getBreakPositions(element);

    while (yPosition < imgHeight) {
      if (yPosition > 0) pdf.addPage();
      pdf.setFillColor(
        window.getComputedStyle(element).backgroundColor || '#ffffff'
      );
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
      yPosition = this.addPageImage(
        pdf,
        canvas,
        imgWidth,
        yPosition,
        imgHeight,
        breakPositions,
        marginTop,
        bottomMargin
      );
    }
    return pdf;
  }

  private getBreakPositions(element: HTMLElement): number[] {
    return [...element.querySelectorAll('.avoid-page-break')].map(
      (child) =>
        child.getBoundingClientRect().top +
        window.scrollY -
        element.getBoundingClientRect().top
    );
  }

  private addPageImage(
    pdf: jsPDF,
    canvas: HTMLCanvasElement,
    imgWidth: number,
    yPosition: number,
    imgHeight: number,
    breakPositions: number[],
    marginTop: number,
    bottomMargin: number
  ): number {
    let nextBreak = breakPositions.find(
      (pos) =>
        pos > yPosition && pos < yPosition + 297 - marginTop - bottomMargin
    );
    let cropHeight = Math.min(
      nextBreak ? nextBreak - yPosition : 297 - marginTop - bottomMargin,
      imgHeight - yPosition
    );

    const croppedCanvas = document.createElement('canvas');
    Object.assign(croppedCanvas, {
      width: canvas.width,
      height: (cropHeight * canvas.width) / imgWidth,
    });
    const croppedCtx = croppedCanvas.getContext('2d');

    croppedCtx?.drawImage(
      canvas,
      0,
      yPosition * (canvas.width / imgWidth),
      croppedCanvas.width,
      croppedCanvas.height,
      0,
      0,
      croppedCanvas.width,
      croppedCanvas.height
    );
    pdf.addImage(
      croppedCanvas.toDataURL('image/png'),
      'PNG',
      0,
      yPosition > 0 ? marginTop : 0,
      imgWidth,
      cropHeight
    );

    return yPosition + cropHeight;
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
