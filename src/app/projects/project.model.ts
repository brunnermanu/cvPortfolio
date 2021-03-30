export class Project {
  public group: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public websitePath: string;

  constructor(group: string, name: string, description: string, imagePath: string, websitePath: string) {
    this.group = group;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.websitePath = websitePath;
  }
}
