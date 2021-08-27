import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../shared/blog-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  myInterval = 2750;
  activeSlideIndex = 0;
  blogs;
  date;
  image;
  text;
  title;
  isLoading: boolean = true;


  slides = [
    {image: 'https://res.cloudinary.com/walterscloudinary/image/upload/v1627436982/k9cs/photo-1627436981748.jpg', text: "Why we Raise, Train, and Donate K9s", header:"About Us", link:"http://localhost:4200/about"},
    {image: 'assets/PoliceDog850.jpg', text: "lorem ipsum blah blah blah", header: ""},
    {image: 'assets/k9-police-car.jpg', text: "lorem ipsum blah blah blah", header:""},
  ];
  constructor(public blogService: BlogServiceService ) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
    res=> {
      this.blogs = res['blogs'];
      console.log(this.blogs);
      this.isLoading = false;
    })
  }

  // getBlog(id){
  //   this.blogService.getBlog(id).subscribe(res => {
  //     this.blogs = res['blogs/' + id]
  //     console.log(this.blogs);
  //   })
  // }

}
