import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { HttpService } from './http.service';
import { Student, students } from './student';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


 // 'student_Address':'test address',
// 'student_Name':'test name',
// 'student_Email':'test email',
// 'student_Password':'test password'




export class AppComponent 
{
    title = 'student-portal-app';
    events: string[] = [];
    opened: boolean = false;


    constructor(private httpService: HttpService) { }


    // const params = new HttpParams(
    //     {
    //         fromObject: {
    //             move: 'e8e7'                
    //         }
    //     });

    // 'student_Address':'test address',
    // 'student_Name':'test name',
    // 'student_Email':'test email',
    // 'student_Password':'test password'

    

    student =
    {
        student_Address: 'test address',
        student_Name: 'test name',
        student_Email: 'test email',
        student_Password: 'test password'
    };
    // student = 
    // {
    //     'student_Address':'test address',
    //     'student_Name':'test name',
    //     'student_Email':'test email',
    //     'student_Password':'test password'
    // };


    



    ngOnInit() 
    {
        // console.log("GET:");
        // let getResult = this.httpService.Get("allStudents");    
        // console.log("get result: "+getResult);

        // console.log("GET:");
        // let getResult = this.httpService.Get("findAdmin/1");
        // console.log("get result: "+getResult);


        //this function can be called for all of the responses

        //use generics or something?????
        // let subscriber = async <T>(res: any) => 
        // {     

        //     console.log(res);
        // }

        //or pass the type as a param
        let subscriber = async (response: any, type: any) => 
        {   
            switch(type){
                case "students":
                    console.log("students: ");
                    //students = res;                
            }

            console.log(response);
        }



        console.log("GET:");
        this.httpService.Get("", subscriber, "students");
       
        //console.log("POST:");
        //this.httpService.Post("addStudent",subscriber, student);        
    }

}