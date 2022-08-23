import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student, students } from '../student';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  id: string | undefined;
  myStudent!: Student;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/')[1];
    const temp = students.find(student => student.id === this.id);



    if (temp) {
      this.myStudent = {
        name: temp.name,
        surname: temp.surname,
        id: temp.id,
        email: temp.email,
        GPA: temp.GPA,
        course: temp.course,
        type: temp.type
      };
    } else {
      this.router.navigate(['/']);
    }

  }
}