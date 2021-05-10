import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../shared/dog-service.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs;
  constructor(public dogService: DogServiceService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(){
    return this.dogService.getDogs().subscribe(res=>{
      this.dogs = res['dogs'];
      console.log(res);
    })
  }

}
