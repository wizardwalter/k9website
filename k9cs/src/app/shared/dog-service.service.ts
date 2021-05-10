import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  constructor(public http: HttpClient) { }
  baseUrl = 'http://localhost:8080'

  getDogs(){
    console.log('connected');
    return this.http.get(this.baseUrl + '/dogs')
  };

  getDog(id){
    console.log(id)
    return this.http.get(this.baseUrl + "/dogs/"+ id)
  }
}
