import { Component, Input } from '@angular/core';
import { Header } from '../../core/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() infos!: Header;
}
