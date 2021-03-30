import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private data: DataService) {
    console.log('fired');
    this.data.getAbout().subscribe(aboutInContact => console.log('aboutInContact', aboutInContact));
  }

  ngOnInit(): void {
  }

}
