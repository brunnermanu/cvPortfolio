import {Injectable, OnInit} from '@angular/core';
import {About, AboutInterface, AboutType} from './about.model';
import {Cv} from './cv.model';
import {Skill, Skills} from './skills.model';
import {Observable, Subject, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {DataStorageService} from './data-storage.service';


@Injectable()
export class DataService {
  aboutChanged$ = new Subject<AboutType>();
  startedEditing = new Subject<string>();
  constructor(private http: HttpClient, private dataStorage: DataStorageService) {

  }

  // updateAboutName(name: string): void {
  //   this.aboutChanged$.next({surName: name});
  // }


  about: AboutType = {};
    // about: About = new About(
    // './assets/img/Artboard.png',
    // 'Manuela',
    // 'Brunner',
    // 'Frontend Developer',
    // 'Hello',
    // 'Who I am and what I do.',
    // 'I am Manuela Brunner and I really love Frontend Development.');


  cv: Cv[] = [
    new Cv('Jan/2021 - Present',
      'Frontend Developer-Internship',
      'Run My Accounts AG',
      'Stäfa, ZH',
      'At Run My Accounts I can deepen my knowledge in Angular and take my skills to the next level.'),
    new Cv('Oct/2020 - Dec/2020',
      'IT-Internship',
      'Gadola Information Systems ',
      'Wallisellen, ZH',
      'Installation and maintenance of the SelectLine software (ERP)\n' +
      '\n' +
      '- First level support\n' +
      '\n' +
      '- Gain experience in software development and system technology'),
  ];

  education: Cv[] = [
    new Cv('Aug/2005 - Jul/2008',
      'Dentalassistentin EFZ',
      'Praxis Gander und Pless',
      'Stans, NW',
      'At Run My Accounts I can deepen my knowledge in Angular and take my skills to the next level.')
  ];

  skills: Skills[] = [
    new Skills('Tech Stack',
      ['Angular', 'HTML', 'CSS', 'Javascript']),
    new Skills('Languages',
      ['German (mother tongue)', 'English (fluent)']),
    new Skills('Soft Skills',
      ['responsible', 'team player', 'flexible'])
  ];


  storeAboutData() {
    const aboutData = this.getAbout();
    this.http.put('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/about.json', aboutData)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchAboutData(): Observable<AboutType> {
    return this.http.get<AboutType>('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/about.json');
  }

  // storeCvData() {
  //   const cvData = this.getCv();
  //   this.http.put('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/cv.json', cvData)
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  // }
  //
  // fetchCvData() {
  //   this.http.get<Cv>('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/cv.json')
  //     .subscribe(cv => {
  //       this.cv = cv;
  //       console.log('fetch', cv);
  //
  //     });
  // }

  getAbout(): Observable<AboutType> {
    return this.aboutChanged$.asObservable();
  }

  updateAbout(newValue: AboutType) {
    this.aboutChanged$.next(newValue);
  }

  getCv(): any {
    return this.cv;
  }


  getEducation(): any {
    return this.education;
  }

  getSkills(): Skill[] {
    return this.skills;
  }


}
