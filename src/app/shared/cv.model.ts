export class Cv {
  constructor( public date?: string,
               public position?: string,
               public firma?: string,
               public standort?: string,
               public text?: string[]) {
  }
}

export interface Cv {
   date?: string;
   position?: string;
   firma?: string;
   standort?: string;
   text?: string[];
}
