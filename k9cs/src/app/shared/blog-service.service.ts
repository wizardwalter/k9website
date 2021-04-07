import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(public http: HttpClient) { }
  baseUrl = "http://localhost:8080"

  getBlogs(){
    console.log('connected')
    return this.http.get(this.baseUrl + "/blog/blogs")
  }
  getBlog(id){
    console.log(id)
    return this.http.get(this.baseUrl + "/blog/blogs/"+ id)
  }
}
