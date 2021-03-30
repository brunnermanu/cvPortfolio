
// todo: about class kill
export class About {
  constructor(
              public photo?: string,
              public surName?: string,
              public name?: string,
              public job?: string,
              public title?: string,
              public subTitle?: string,
              public text?: string) {}
}

export type AboutType = {
  photo?: string;
  surName?: string;
  name?: string;
  job?: string;
  title?: string;
  subTitle?: string;
  text?: string;
};

export interface AboutInterface {
  photo?: string;
  surName?: string;
  name?: string;
  job?: string;
  title?: string;
  subTitle?: string;
  text?: string;
}


