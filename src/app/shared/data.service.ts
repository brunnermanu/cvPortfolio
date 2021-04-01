import {Injectable, OnInit} from '@angular/core';
import {About, AboutInterface, AboutType} from './about.model';
import {Cv} from './cv.model';
import {Skill, Skills} from './skills.model';
import {Observable, Subject, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Project} from '../projects/project.model';

@Injectable()
export class DataService {
  aboutChanged$ = new Subject<AboutType>();
  startedEditing = new Subject<string>();
  constructor(private http: HttpClient) {

  }

  // updateAboutName(name: string): void {
  //   this.aboutChanged$.next({surName: name});
  // }


  // about: AboutType = {};
    about: About = new About(
    './assets/img/Artboard.png',
    'Manuela',
    'Brunner',
    'Frontend Developer',
    'Hello',
    'I am Manuela and I love Frontend Development!',
    'My unyielding motivation has its source in the knowledge that, compared to the normal career as a software developer, I have to acquire all of the specialist knowledge myself using optimal learning methods. I will continue to do this until my market value is in line with my goals.');


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
      'and first level support\n' ),
    new Cv('Mar/2020 - Sept/2020',
      'Self-study Frontend Development',
      'at Home',
      'Schlieren, ZH',
      '\n' +
      'My hobby should become a job. That\'s why I decided to quit in order to work on online courses 6 days a week, to read documentation and to advance my own project (shopping list)'),
    new Cv('Jan/2018 - Feb/2020',
      'Patientendisposition',
      'Klinik Lengg AG',
      'Zürich, ZH',
      '- Therapy planning and - coordination\n' +
      '- Planning the neurological and psychiatric ' +
      'Doctor\'s office hours\n' +
      '- Telephone support for internal and external customers\n' +
      '- further administrative processing of ' +
      'Patient registrations\n' +
      '- Disposition of inpatient beds\n' +
      '- Organization of the reception of emergencies'),
    new Cv('Jun/2017 - Dec/2017',
      'Dentalassistentin',
      'Zahnarzt Bettschart',
      'Ibach, SZ',
      ' - Contact person for technical problems of\n' +
      '  medical equipment ' +
      '- Contact person for the trainees\n' +
      '- Administrative activities, appointments\n' +
      ' Accounting' +
      '- patient care\n'),
    new Cv('Mar/2016 - May/2017',
      'Device testing employee',
      'Roche Diagnostics',
      'Rotkreuz, ZG',
      '- \n' +
      'testing of medical technical assemblies and\n' +
      'Devices according to test instructions\n' +
      '- ensuring flawless products\n' +
      '\t- permanent optimization of the work process'),
    new Cv('Feb/2010 - Dec/2015',
      'Dental Assistant',
      'Praxis Gander und Pless',
      'Stans, NW',
      ' - Contact person for technical problems of' +
        '  medical equipment\n' +
        '- Contact person for the trainees\n' +
        '- Administrative activities, appointments\n' +
         ' Accounting' +
        '- patient care\n'),
    new Cv('Jul/2008 - Jan/2010',
      'Dental Assistant',
      'Praxis Dr. Schärer',
      'Kriens, LU',
      ' - Contact person for technical problems of' +
      '  medical equipment\n' +
      '- Contact person for the trainees\n' +
      '- Administrative activities, appointments\n' +
      ' Accounting' +
      '- patient care\n'),
  ];

  education: Cv[] = [
    new Cv('Aug/2005 - Jul/2008',
      'Dental Assistant EFZ',
      'Praxis Gander und Pless',
      'Stans, NW',
      'I learned about all practice-related processes and activities in a dental office.')
  ];

  skills: Skills[] = [
    new Skills('Tech Stack',
      ['Angular', 'HTML', 'CSS', 'Javascript']),
    new Skills('Languages',
      ['German (mother tongue)', 'English (fluent)']),
    new Skills('Soft Skills',
      ['responsible', 'team player', 'flexible', 'Discipline to learn new skills by myself'])
  ];

  private projects: Project[] = [
    new Project('app',
      'Shopping List & Recipe Book',
      'My actual project is created with Angular. The aim was to create recipes and save the ingredients directly on the shopping list. Try out the app (test1@hotmail.com / password: testtest)',
      './assets/img/groceries.jpeg',
      'https://shoppinglist-bb6ef.web.app',
    ),
    new Project('website',
      'Gravuren Brunner',
      'This was my very first project created with HTML and CSS.',
      './assets/img/Handgravur.jpeg',
      'https://gravurenbrunner.ch/',
    ),
    new Project('app',
      'Hangman-Game',
      'Created with Javascript.',
      './assets/img/hangman.jpg',
      'https://manu-brunner-hangman.netlify.app',
    ),
    new Project('app',
      'Todo-App',
      'Created with Javascript.',
      './assets/img/Todolist.jpg',
      'https://manu-brunner-todo.netlify.app',
    ),
    new Project('app',
      'Notes-App',
      'Created with Javascript.',
      './assets/img/notes.jpg',
      'https://manu-brunner-notes.netlify.app',
    ),

  ];

  storeProjects() {
    const projects = this.getProjects();
    return this.http.put('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/projects.json', projects)
    // .subscribe(response => {
    //   console.log(response);
    // });
  }

  fetchProjects() {
    return this.http.get<Project>('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/projects.json');
  }


  storeAboutData() {
    const aboutData = this.about;
    return this.http.put('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/about.json', aboutData)
      // .subscribe(response => {
      //   console.log(response);
      // });
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


  getProjects() {
    return this.projects.slice();
  }

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
