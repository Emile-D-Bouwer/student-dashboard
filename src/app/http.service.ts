import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpService 
{

    private url = "https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8";


    constructor(private http: HttpClient) { }

    GET(url = this.url) {
        //opions
        //,{observe: 'body', responseType: 'json'}
        return this.http.get(url);
    }

    private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});


    POST(url = this.url, data: HttpParams) {
        this.http.post<any>(url, data/*, {headers: this.headers}*/).subscribe({
            next: data => {
                console.log("Post data: "+data);
            },
            error: error => {              
                console.error('There was an error!', error.message);
            }

        });
    }


}
