import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Dog } from '../_models/dogModel';
import { Observable } from 'rxjs';

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

  addDog(dogObj): Observable<any> {
    return this.http.post(this.baseUrl + '/blogs/create', dogObj);
  }
}
