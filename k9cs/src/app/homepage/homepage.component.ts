import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 
  myInterval = 2500;
  activeSlideIndex = 0;
 
  slides = [
    {image: 'assets/k9-police-car.jpg', text: "lorem ipsum blah blah blah"},
    {image: 'assets/PoliceDog850.jpg', text: "lorem ipsum blah blah blah"},
    {image: 'assets/k9-police-car.jpg', text: "lorem ipsum blah blah blah"},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  

}
