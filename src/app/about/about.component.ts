import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {About, AboutType} from '../shared/about.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
aboutData: AboutType;
isEditMode = false;

  constructor(private data: DataService, private router: Router) {

  }

  ngOnInit()  {
   // this.data.storeAboutData().subscribe(response => {
   //   console.log(response);
   // });
    this.data.fetchAboutData().subscribe(about => {
      console.log('about', about);
      this.aboutData = about;
    });
  }

  openForm() {
    this.router.navigateByUrl('/edit-portfolio');
  }
  updateAbout() {
    this.data.updateAbout({surName: 'Martina'});
  }

}
