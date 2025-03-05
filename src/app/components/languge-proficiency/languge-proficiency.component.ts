import { Component, Input } from '@angular/core';
import {
  ProgressBarMode,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import { LanguageProficiency } from '../../core/models/language.model';

@Component({
  selector: 'app-languge-proficiency',
  imports: [MatProgressBarModule],
  templateUrl: './languge-proficiency.component.html',
  styleUrl: './languge-proficiency.component.scss',
})
export class LangugeProficiencyComponent {
  @Input() language!: LanguageProficiency;
  mode: ProgressBarMode = 'determinate';
}
