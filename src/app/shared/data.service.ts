import {Injectable} from '@angular/core';
import { About } from './about.model';
import { Cv } from './cv.model';

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
    new Cv('01/2021 - Present',
      'Internship Frontend Developer',
      'Run My Accounts AG',
      'Stäfa, ZH',
      'At Run My Accounts I can deepen my knowledge in Angular and take my skills to the next level.'),
    new Cv('10/2021 - 12/2021',
      'Internship IT',
      'Gadola Information Systems GmbH',
      'Wallisellen, ZH',
      'Installation and maintenance of the SelectLine software (ERP)\n' +
      '\n' +
      '- First level support\n' +
      '\n' +
      '- Gain experience in software development and system technology'),
  ];

  getCv() {
    console.log('this.cv', this.cv);
    return this.cv;
  }

}
