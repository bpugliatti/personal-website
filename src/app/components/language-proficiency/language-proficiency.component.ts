import { Component, Input } from '@angular/core';
import {
  ProgressBarMode,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import { LanguageProficiency } from '../../core/models/language.model';

@Component({
  selector: 'app-language-proficiency',
  imports: [MatProgressBarModule],
  templateUrl: './language-proficiency.component.html',
  styleUrl: './language-proficiency.component.scss',
})
export class LanguageProficiencyComponent {
  @Input() language!: LanguageProficiency;
  mode: ProgressBarMode = 'determinate';
}
