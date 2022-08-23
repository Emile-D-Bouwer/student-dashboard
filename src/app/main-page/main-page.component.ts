import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { students } from '../student';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  students = students;
  public cols: number =1;

  

  constructor() { }
  
  ngOnInit() {
    this.cols = window.innerWidth > 1000 ? 5 : window.innerWidth > 800 ? 4 : window.innerWidth > 700 ? 3 : 1;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.cols = window.innerWidth > 1000 ? 5 : window.innerWidth > 800 ? 4 : window.innerWidth > 700 ? 3 : 1;
  }

}