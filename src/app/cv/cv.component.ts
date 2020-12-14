import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export  class CvComponent implements OnInit {
  cvData = [];

  constructor( public data: DataService) {
    console.log(this.data.getCv());
    this.cvData = this.data.getCv();
  }


  ngOnInit(): void {
  }

}
