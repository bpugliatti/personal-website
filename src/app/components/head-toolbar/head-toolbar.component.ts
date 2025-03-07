import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PdfService } from '../../core/services/pdf.service';

@Component({
  selector: 'app-head-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './head-toolbar.component.html',
  styleUrl: './head-toolbar.component.scss',
})
export class HeadToolbarComponent {
  pdfService = inject(PdfService);
  savePdf() {
    this.pdfService.generatePdf('cv-container', 'B');
  }
}
