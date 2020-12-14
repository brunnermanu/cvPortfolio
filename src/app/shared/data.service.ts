import {Injectable} from '@angular/core';
import { About } from './about.model';
import { Cv } from './cv.model';
import {Skill, Skills} from './skills.model';

@Injectable()
export class DataService {
  about: About = new About(
    'Manuela',
    'Brunner',
    'Frontend Developer',
    'Hello',
    'Who I am and what I do.',
    'I am Manuela Brunner and I really love Frontend Development.');

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
