import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Contact } from '../../core/models/contact.model';

@Component({
  selector: 'app-contact-item',
  imports: [MatIconModule, ClipboardModule, MatButtonModule, MatTooltipModule],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss',
})
export class ContactItemComponent {
  @Input() contact!: Contact;

  private snackBar = inject(MatSnackBar);

  showCopiedMessage() {
    this.snackBar.open('Copied to clipboard!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
