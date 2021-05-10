import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from '../shared/blog-service.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
   blogs;
   date;
  constructor(public blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
    res=> {
      this.blogs = res['blogs'];
      console.log(res);
      this.date = this.blogs.date;
      console.log(this.blogs)
    })
  }

  
}