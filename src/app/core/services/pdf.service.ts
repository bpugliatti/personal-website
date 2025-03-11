import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({ providedIn: 'root' })
export class PdfService {
  #PAGE_WIDTH = 210; // A4 width in mm
  #PAGE_HEIGHT = 297; // A4 height in mm
  #MARGIN_TOP = 10;
  #MARGIN_BOTTOM = 5;

  async printPDF(elementId: string): Promise<void> {
    const pdf = await this.#generatePdf(elementId);
    if (pdf) {
      window.open(URL.createObjectURL(pdf.output('blob')), '_blank')?.print();
    }
  }

  async savePDF(elementId: string, fileName: string): Promise<void> {
    const pdf = await this.#generatePdf(elementId);
    if (pdf) {
      pdf.save(`${fileName}.pdf`);
    }
  }

  async #generatePdf(elementId: string): Promise<jsPDF | null> {
    const element = document.getElementById(elementId);
    if (!element) return null;

    const leftRightMargin = this.#shouldApplyMargins(element.clientWidth)
      ? 10
      : 0;
    const canvas = await this.#captureElement(element);

    return this.#createPdfFromCanvas(canvas, element, leftRightMargin);
  }

  #shouldApplyMargins(elementWidth: number): boolean {
    return elementWidth < 750;
  }

  async #captureElement(element: HTMLElement): Promise<HTMLCanvasElement> {
    const originalStyle = element.getAttribute('style');
    element.style.width = '270mm';
    element.style.backgroundColor = '#ffffff';

    try {
      return await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        ignoreElements: (el) => el.classList.contains('no-print'),
      });
    } finally {
      this.#restoreElementStyle(element, originalStyle);
    }
  }

  #restoreElementStyle(
    element: HTMLElement,
    originalStyle: string | null
  ): void {
    if (originalStyle) {
      element.setAttribute('style', originalStyle);
    } else {
      element.removeAttribute('style');
    }
  }

  #createPdfFromCanvas(
    canvas: HTMLCanvasElement,
    element: HTMLElement,
    leftRightMargin: number
  ): jsPDF {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = this.#PAGE_WIDTH - 2 * leftRightMargin;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let yPosition = 0;

    const breakPositions = this.#getBreakPositions(
      element,
      this.#PAGE_HEIGHT - this.#MARGIN_TOP - this.#MARGIN_BOTTOM
    );

    while (yPosition < imgHeight) {
      if (yPosition > 0) pdf.addPage();
      this.#addWhiteBackground(pdf);
      yPosition = this.#addPageImage(
        pdf,
        canvas,
        imgWidth,
        yPosition,
        imgHeight,
        breakPositions,
        leftRightMargin
      );
    }

    return pdf;
  }

  #addWhiteBackground(pdf: jsPDF): void {
    pdf.setFillColor('#ffffff');
    pdf.rect(0, 0, this.#PAGE_WIDTH, this.#PAGE_HEIGHT, 'F');
  }

  #getBreakPositions(element: HTMLElement, maxPageHeight: number): number[] {
    let breakPoints: number[] = [];
    let yOffset = 0;

    element.querySelectorAll('*').forEach((child) => {
      const rect = child.getBoundingClientRect();
      const childHeight = (child as HTMLElement).offsetHeight;

      // Ensure element is visible
      if (childHeight === 0) return;

      const childBottom = yOffset + childHeight;

      // If this element exceeds max height, move to next page
      if (childBottom > maxPageHeight) {
        breakPoints.push(yOffset);
        yOffset = childHeight; // Start a new page with this element
      } else {
        yOffset = childBottom; // Move down the page
      }
    });

    return breakPoints;
  }

  #addPageImage(
    pdf: jsPDF,
    canvas: HTMLCanvasElement,
    imgWidth: number,
    yPosition: number,
    imgHeight: number,
    breakPositions: number[],
    leftRightMargin: number
  ): number {
    let nextBreak = breakPositions.find(
      (pos) =>
        pos > yPosition &&
        pos <
          yPosition + this.#PAGE_HEIGHT - this.#MARGIN_TOP - this.#MARGIN_BOTTOM
    );

    let cropHeight = Math.min(
      nextBreak
        ? nextBreak - yPosition
        : this.#PAGE_HEIGHT - this.#MARGIN_TOP - this.#MARGIN_BOTTOM,
      imgHeight - yPosition
    );

    // Ensure we're not cutting text in half
    if (nextBreak && nextBreak - yPosition < 50) {
      cropHeight = nextBreak - yPosition + 30; // Add extra space to avoid cut-off
    }

    const croppedCanvas = this.#createCroppedCanvas(
      canvas,
      imgWidth,
      cropHeight,
      yPosition
    );

    pdf.addImage(
      croppedCanvas.toDataURL('image/png'),
      'PNG',
      leftRightMargin,
      yPosition > 0 ? this.#MARGIN_TOP : 0,
      imgWidth,
      cropHeight
    );

    return yPosition + cropHeight;
  }

  #createCroppedCanvas(
    canvas: HTMLCanvasElement,
    imgWidth: number,
    cropHeight: number,
    yPosition: number
  ): HTMLCanvasElement {
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

    return croppedCanvas;
  }
}
