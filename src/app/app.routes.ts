import { Routes } from '@angular/router';
import { ResumeContainerComponent } from './components/resume-container/resume-container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  { path: ':lang/home', component: ResumeContainerComponent },
  { path: '**', component: NotFoundComponent },
];
