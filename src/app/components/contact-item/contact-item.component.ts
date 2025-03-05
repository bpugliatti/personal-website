import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Contact } from '../../core/models/contact.model';

@Component({
  selector: 'app-contact-item',
  imports: [MatIconModule],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss',
})
export class ContactItemComponent {
  @Input() contact!: Contact;
}
