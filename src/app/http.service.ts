import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HttpService 
{

    // GET request
    private testurl = "https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8";

    private baseUrl = "http://localhost:8080/";

   

    private headers = { 'content-type': 'application/json'};

    constructor(private http: HttpClient) { }

    //GET
    Get(endPointPath: string, subscriber: any, type: any, params?: HttpParams)
    {    
        //remove this  !!!!!!!!!!!!!!!!!!!!!!!!!
        this.baseUrl = "https://get.geojs.io/v1/ip/country.json";

       
        this.http.get(this.baseUrl + endPointPath,{'params':params}).subscribe(
        {
                next: (next) => subscriber(next, type),
                error: (error) => { console.log("error: "+error); }
        }
        );
        
    }


    //private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});


    //POST params can be empty
    //example params
    // const params = new HttpParams()
    // .set('para1', "value1")
    // .set('para2',"value2");

    //result
    //http://localhost:3000/people?para1=value1&para2=value2



    //ADD
    Post(endPointPath: string,subscriber: any, Obj: object, params?: HttpParams)
    {       
        console.log("Sending: "+JSON.stringify(Obj));

        this.http.post<any>(this.baseUrl + endPointPath, JSON.stringify(Obj), {'headers':this.headers, 'params':params}).subscribe(
        {
            next: subscriber,
            error: (error) => { console.log("error: "+error); }
        });
    }




    //UPDATE
    Put(endPointPath: string,subscriber: any, Obj: object)
    {    
        console.log("Sending: "+JSON.stringify(Obj));

        this.http.put<any>(this.baseUrl + endPointPath, JSON.stringify(Obj), {'headers':this.headers}).subscribe(
        {
            next: subscriber,
            error: (error) => { console.log("error: "+error); }
        });
    }

    //DELETE
    Delete(endPointPath: string, subscriber: any)
    {          
        this.http.delete<any>(this.baseUrl + endPointPath, {'headers':this.headers}).subscribe(
        {
            next: subscriber,
            error: (error) => { console.log("error: "+error); }
        });
    }

}
