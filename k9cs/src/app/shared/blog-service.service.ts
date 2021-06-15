import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(public http: HttpClient, public router: Router) { }
  baseUrl = "http://localhost:8080"

  getBlogs(){
    console.log('connected')
    return this.http.get(this.baseUrl + "/blogs")
  };

  getBlog(id){
    console.log(id)
    return this.http.get<{_id: string, title: string, text: string, author: string}>(this.baseUrl + "/blogs/"+ id)
  };

  addBlog(title: string, text: string, author: string){
    const blogData = {
      title: title,
      text: text,
      author: author
    }
    this.http.post<{message: string, blog: Blog}>(this.baseUrl + "/blogs/create", blogData)
    .subscribe((responseData)=>{
      this.router.navigate(['/']);
    })
  };

}
