import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export  class CvComponent implements OnInit {
  cvData = [];
  educationData = [];
  skillsData = [];

  constructor( public data: DataService) {
    this.cvData = this.data.getCv();
    this.educationData = this.data.getEducation();
    this.skillsData = this.data.getSkills();
  }


  ngOnInit(): void {
  }

}
