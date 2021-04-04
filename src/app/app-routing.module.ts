import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'goals', component: ContactComponent },
  { path: 'edit-portfolio', component: EditPortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
