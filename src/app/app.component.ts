import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    title = 'student-portal-app';
    events: string[] = [];
    opened: boolean = false;


    constructor(private httpService: HttpService) { }





    ngOnInit() 
    {
        console.log("GET:");
        this.httpService.GET().subscribe(
            (response) => { console.log(response); },
            (error) => { console.log(error); });



        const params = new HttpParams(
        {
            fromObject: {
                move: 'e8e7'                
            }
        });


         
        console.log("POST:");
        // this.httpService.POST("http://localhost:8080/api/makemove", params).subscribe(
        //     (response) => { console.log(response); },
        //     (error) => { console.log(error); });

       this.httpService.POST("http://localhost:8080/api/makemove", params);
    }

}


