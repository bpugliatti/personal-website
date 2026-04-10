import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PdfService {
  print(): void {
    window.print();
  }
}
