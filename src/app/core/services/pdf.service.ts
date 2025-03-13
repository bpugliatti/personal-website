import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PDF } from '../constants/pdf.constant';
import { PdfImageConfig } from '../models/pdf.model';

@Injectable({ providedIn: 'root' })
export class PdfService {
  #tempCanvas: HTMLCanvasElement = document.createElement('canvas');
  #tempCanvasContext: CanvasRenderingContext2D | null =
    this.#tempCanvas.getContext('2d');
  #config!: PdfImageConfig;

  async printPDF(elementId: string): Promise<void> {
    const pdf = await this.#generatePdf(elementId);
    if (pdf) {
      const pdfBlob = pdf.output('blob');
      window.open(URL.createObjectURL(pdfBlob), '_blank')?.print();
    }
  }

  async savePDF(elementId: string, fileName: string): Promise<void> {
    const pdf = await this.#generatePdf(elementId);
    if (pdf) {
      pdf.save(`${fileName}.pdf`);
    }
  }

  /**
   * Generates a PDF from the given element ID by capturing it as an image.
   */
  async #generatePdf(elementId: string): Promise<jsPDF | null> {
    const element = document.getElementById(elementId);
    if (!element) return null;

    const canvas = await this.#captureElement(element);

    // 🔹 Create a new jsPDF instance each time!
    const pdf = new jsPDF();

    this.#config = new PdfImageConfig(pdf, canvas);
    return this.#generatePdfPages(pdf);
  }

  /**
   * Captures an HTML element and converts it into a canvas image.
   * Adjusts styles temporarily to ensure proper rendering.
   */
  async #captureElement(element: HTMLElement): Promise<HTMLCanvasElement> {
    if (!element) throw new Error('Element not found');

    const originalRootStyle = element.getAttribute('style');
    const elementsToHide = Array.from(
      element.querySelectorAll('.no-print')
    ) as HTMLElement[];
    const hiddenElementsStyles = new Map(
      elementsToHide.map((el) => [el, el.getAttribute('style')])
    );

    elementsToHide.forEach((el) => (el.style.display = 'none'));
    Object.assign(element.style, {
      width: PDF.ELEMENT_WIDTH,
      backgroundColor: PDF.OPTIONS.backgroundColor,
    });

    try {
      return await html2canvas(element, { ...PDF.OPTIONS, scrollY: 0 });
    } finally {
      hiddenElementsStyles.forEach((style, el) =>
        style ? el.setAttribute('style', style) : el.removeAttribute('style')
      );
      if (originalRootStyle) {
        element.setAttribute('style', originalRootStyle);
      } else {
        element.removeAttribute('style');
      }
    }
  }

  /**
   * Iterates through the captured content and adds pages to the PDF accordingly.
   */
  #generatePdfPages(pdf: jsPDF): jsPDF {
    while (this.#config.yPosition < this.#config.imgHeight) {
      if (!this.#config.firstPage) pdf.addPage();
      this.#addBackgroundColor(pdf);
      this.#config.yPosition = this.#insertImageToPdf(pdf);
      this.#config.firstPage = false;
    }

    return pdf;
  }

  /**
   * Adds a white background to the PDF to prevent transparent artifacts.
   */
  #addBackgroundColor(pdf: jsPDF): void {
    pdf.setFillColor(PDF.OPTIONS.backgroundColor);
    pdf.rect(0, 0, PDF.PAGE_SETTINGS.width, PDF.PAGE_SETTINGS.height, 'F');
  }

  /**
   * Adds a portion of the captured content as an image to the PDF.
   */
  #insertImageToPdf(pdf: jsPDF): number {
    const cropHeight = Math.min(
      this.#config.maxPageHeight,
      this.#config.imgHeight - this.#config.yPosition
    );
    const croppedCanvas = this.#cropCanvasSection(cropHeight);

    pdf.addImage(
      croppedCanvas.toDataURL('image/png'),
      'PNG',
      this.#config.firstPage ? 0 : PDF.PAGE_SETTINGS.leftRightMargin,
      this.#config.firstPage ? 0 : PDF.PAGE_SETTINGS.marginTop,
      this.#config.firstPage ? PDF.PAGE_SETTINGS.width : this.#config.imgWidth,
      cropHeight
    );

    return this.#config.yPosition + cropHeight;
  }

  /**
   * Crops a portion of the captured canvas for use in paginated PDFs.
   */
  #cropCanvasSection(cropHeight: number): HTMLCanvasElement {
    this.#tempCanvas.width = this.#config.canvas.width;
    this.#tempCanvas.height =
      (cropHeight * this.#config.canvas.width) / this.#config.imgWidth;

    if (this.#tempCanvasContext) {
      this.#tempCanvasContext.drawImage(
        this.#config.canvas,
        0,
        this.#config.yPosition *
          (this.#config.canvas.width / this.#config.imgWidth),
        this.#tempCanvas.width,
        this.#tempCanvas.height,
        0,
        0,
        this.#tempCanvas.width,
        this.#tempCanvas.height
      );
    }

    return this.#tempCanvas;
  }
}
