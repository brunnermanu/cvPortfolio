export class Skills {
  constructor( public title: string,
               public subSkills: Array<string>) {}
}

export interface Skill {
  title?: string;
  subSkills?: string[];
}
