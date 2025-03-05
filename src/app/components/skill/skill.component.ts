import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../core/models/skill-category.model';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skillGroup!: SkillCategory;

  get formattedSkills(): string {
    return (
      this.skillGroup?.skillList?.map((skill) => skill.skillName).join(', ') ||
      ''
    );
  }
}
