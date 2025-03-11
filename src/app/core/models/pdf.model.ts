import { inject } from '@angular/core';
import jsPDF from 'jspdf';
import { PDF } from '../constants/pdf.constant';

export interface PdfOptions {
  scale: number;
  backgroundColor: string;
  ignoreClass: string;
}

export interface PdfPageSettings {
  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  leftRightMargin: number;
}

export interface IPdfImageConfig {
  pdf: jsPDF;
  canvas: HTMLCanvasElement;
  imgWidth: number;
  yPosition: number;
  imgHeight: number;
  maxPageHeight: number;
  firstPage: boolean;
}

export class PdfImageConfig implements IPdfImageConfig {
  pdf: jsPDF;
  canvas: HTMLCanvasElement;
  imgWidth: number;
  yPosition: number;
  imgHeight: number;
  maxPageHeight: number;
  firstPage: boolean;

  constructor(pdf: jsPDF, canvas: HTMLCanvasElement) {
    const pageSettings = PDF.PAGE_SETTINGS;

    this.pdf = pdf;
    this.canvas = canvas;
    this.imgWidth = pageSettings.width - 2 * pageSettings.leftRightMargin;
    this.yPosition = 0;
    this.imgHeight = (canvas.height * this.imgWidth) / canvas.width;
    this.maxPageHeight = pageSettings.height - pageSettings.marginBottom;
    this.firstPage = true;
  }
}
