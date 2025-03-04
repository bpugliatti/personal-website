import { Component } from '@angular/core';
import { ProgressBarMode, MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-languge-proficiency',
  imports: [MatProgressBarModule],
  templateUrl: './languge-proficiency.component.html',
  styleUrl: './languge-proficiency.component.scss'
})
export class LangugeProficiencyComponent {
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
