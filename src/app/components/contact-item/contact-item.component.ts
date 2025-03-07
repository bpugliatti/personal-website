import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Contact } from '../../core/models/contact.model';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

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
      duration: 3000, // Message disappears after 3 seconds
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
