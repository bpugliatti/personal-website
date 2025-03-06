import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../core/models/skill-category.model';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-skill',
  imports: [MatListModule, MatIcon],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skillGroups!: SkillCategory[];

  get formattedSkillGroups() {
    return (
      this.skillGroups?.map((group) => ({
        ...group,
        formattedSkills:
          group.skillList?.map((skill) => skill.skillName).join(', ') ||
          'No skills available',
      })) || []
    );
  }
}
