import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {DataService} from '../shared/data.service';
import {About, AboutType} from '../shared/about.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss']
})
export class EditPortfolioComponent implements OnInit {
  editForm: any = FormGroup;
  editMode = true;
  subscription: Subscription;
  editedItemIndex: number;
  editAboutData: AboutType;

  constructor(private dataService: DataService,
              public fb: FormBuilder ) {
    this.editForm = fb.group({
      imagePath: [null],
      name: [null],
      surName: [null],
      job: [null],
      title: [null],
      subtitle: [null],
      text: [null]
    });
  }

  ngOnInit(): void {
    // this.subscription = this.dataService.startedEditing.subscribe((index: number) => {
    //   this.editedItemIndex = index;
    //   this.editMode = true;
    //   });
    // this.dataService.getAbout().subscribe(about => {
    //   this.editAboutData = about;
    // });
  }

  onSubmitAbout() {
   console.log(this.editForm);
  }

  initForm() {
    let photo = '';
    let name = '';
    let surname = '';
    let job = '';
    let title = '';
    let subtitle = '';
    let text = '';

    if (this.editMode) {
      const aboutData = this.dataService.getAbout().subscribe(about => {
        photo = about.photo;
        name = about.name;
        surname = about.surName;
        job = about.job;
        title = about.title;
        subtitle = about.subTitle;
        text = about.text;
      });

      this.editForm = new FormGroup({
        imagePath: new FormControl(photo),
        name: new FormControl(name),
        surname: new FormControl(surname),
        job: new FormControl(job),
        title: new FormControl(title),
        subtitle: new FormControl(subtitle),
        text: new FormControl(text),
      });

    }

  }
  //   const newAbout = new About(this.editForm.value.imagePath,
  //     this.editForm.value.name,
  //     this.editForm.value.surName,
  //     this.editForm.value.job,
  //     this.editForm.value.title,
  //     this.editForm.value.subtitle,
  //     this.editForm.value.text);
  //   this.dataService.updateAbout(newAbout);
  // }

}
