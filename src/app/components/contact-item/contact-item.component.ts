import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Contact } from '../../core/models/contact.model';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-contact-item',
  imports: [MatIconModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss',
})
export class ContactItemComponent {
  @Input() contact!: Contact;
}
