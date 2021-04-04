import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { DataService } from './shared/data.service';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { AppUiModule } from './app-ui.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    CvComponent,
    ProjectsComponent,
    ContactComponent,
    ButtonComponent,
    EditPortfolioComponent,
    EditButtonComponent,
    ProjectItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppUiModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
