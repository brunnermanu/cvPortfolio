import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Cv } from '../shared/cv.model';
import { Skills } from '../shared/skills.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export  class CvComponent implements OnInit {
  cvData: Cv[];
  educationData: Cv;
  skillsData: Skills;

  constructor( public data: DataService) {
  }


  ngOnInit() {
    // is needed to update my data until my Forms are ready
    // this.data.storeCvData().subscribe(response => {
    //   console.log(response);
    // });
    // this.data.storeEducationData().subscribe(response => {
    //   console.log(response);
    // });
    // this.data.storeSkillData().subscribe(response => {
    //   console.log(response);
    // });
    this.data.fetchCvData()
      .subscribe(cvData => {
      this.cvData = cvData.reverse();
    });

    this.data.fetchEducationData().subscribe((educationData: Cv) => {
      this.educationData = educationData;
    });
    this.data.fetchSkillData().subscribe(skillsData => {
      this.skillsData = skillsData;
    });
  }

}
