import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResumeContainerComponent } from './components/resume-container/resume-container.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ResumeContainerComponent },
    { path: '**', component: NotFoundComponent }
];
