import { Component, Input } from '@angular/core';
import { Experience } from '../../core/models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experience!: Experience;
}
