import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PdfService } from '../../core/services/pdf.service';
import { CV_INFO } from '../../core/constants/cv-info.constant';

@Component({
  selector: 'app-head-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './head-toolbar.component.html',
  styleUrl: './head-toolbar.component.scss',
})
export class HeadToolbarComponent {
  #pdfService = inject(PdfService);
  cvName = CV_INFO.header.lastName + ' ' + CV_INFO.header.firstName;

  savePdf() {
    this.#pdfService.savePDF('cv-container', this.cvName + ' Resume');
  }

  printPdf() {
    this.#pdfService.printPDF('cv-container');
  }
}
