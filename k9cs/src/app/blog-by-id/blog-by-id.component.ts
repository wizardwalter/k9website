import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../shared/blog-service.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-blog-by-id',
  templateUrl: './blog-by-id.component.html',
  styleUrls: ['./blog-by-id.component.css']
})
export class BlogByIdComponent implements OnInit {
  blog;
  id;

  constructor(public BlogService: BlogServiceService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.BlogService.getBlog(this.id).subscribe(res => {
        this.blog = res['blog'];
        console.log(res);
      })
    })
  }


}
