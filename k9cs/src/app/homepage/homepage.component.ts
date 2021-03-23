import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../shared/blog-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 
  myInterval = 2500;
  activeSlideIndex = 0;
  blogs;
  date;
  image;
  text;

 
  slides = [
    {image: 'assets/k9-police-car.jpg', text: "lorem ipsum blah blah blah"},
    {image: 'assets/PoliceDog850.jpg', text: "lorem ipsum blah blah blah"},
    {image: 'assets/k9-police-car.jpg', text: "lorem ipsum blah blah blah"},
  ];
  constructor(public blogService: BlogServiceService ) { }

  ngOnInit(): void {
    this.blogService.getBlog().subscribe(
    res=> {
      this.blogs = res['blogs'];
      console.log(this.blogs)
    })
  }
  

}
