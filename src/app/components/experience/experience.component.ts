import { Component, inject, Input } from '@angular/core';
import { Experience } from '../../core/models/experience.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experience!: Experience;
  private sanitizer = inject(DomSanitizer);

  get sanitizedDescription(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.experience?.extraDescription || ''
    );
  }
}
