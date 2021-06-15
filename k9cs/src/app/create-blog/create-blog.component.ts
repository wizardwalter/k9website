import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogServiceService } from '../shared/blog-service.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  private blogId: string;
  blog: Blog;
  isLoading: boolean;




  constructor(public route : ActivatedRoute, public blogService: BlogServiceService) { }

  ngOnInit(): void {

   }

  onSubmit(form: NgForm){
    if(form.invalid){
      return
    }else{
      this.blogService.addBlog(form.value.title, form.value.text, form.value.author)
    }
   form.reset();
  }

}
