import { Component, OnInit } from '@angular/core';
import {Project} from './project.model';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // is needed to update my data until forms are ready
    // this.dataService.storeProjects()
    //   .subscribe( response => {
    //   console.log('projects', response);
    // });
    this.dataService.fetchProjects().subscribe(p => {
      console.log('p', p);
      this.projects = p;
    });
  }

}
