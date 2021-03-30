import {Injectable, OnInit} from '@angular/core';
import {AboutType} from './about.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService implements OnInit {
  about: AboutType = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchAboutData().subscribe(aboutData => {
      this.about = aboutData;
    });
  }

  storeAboutData(aboutData: AboutType[]) {
    this.http.put('https://cv-portfolio-8ff7b-default-rtdb.firebaseio.com/about.json', aboutData)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchAboutData() {
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
}
