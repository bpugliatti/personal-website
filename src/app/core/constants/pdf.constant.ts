import { PdfOptions, PdfPageSettings } from '../models/pdf.model';

export const PDF = {
  PAGE_SETTINGS: {
    width: 210, // A4 width in mm
    height: 297, // A4 height in mm
    marginTop: 10,
    marginBottom: 10,
    leftRightMargin: 10,
  } as PdfPageSettings,
  OPTIONS: {
    scale: 2,
    backgroundColor: '#ffffff',
    ignoreClass: 'no-print',
  } as PdfOptions,
  ELEMENT_WIDTH: '270mm',
};
