import { PdfOptions, PdfPageSettings } from '../models/pdf.model';

export const PDF = {
  PAGE_SETTINGS: <PdfPageSettings>{
    width: 210, // A4 width in mm
    height: 297, // A4 height in mm
    marginTop: 10,
    marginBottom: 10,
    leftRightMargin: 10,
  },
  OPTIONS: <PdfOptions>{
    scale: 2,
    backgroundColor: '#ffffff',
    ignoreClass: 'no-print',
  },
  ELEMENT_WIDTH: '270mm',
};
