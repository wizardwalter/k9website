import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DogServiceService } from '../shared/dog-service.service';

@Component({
  selector: 'app-dogs-by-id',
  templateUrl: './dogs-by-id.component.html',
  styleUrls: ['./dogs-by-id.component.css']
})
export class DogsByIdComponent implements OnInit {
  id;
  dog;
  constructor(public activatedRoute: ActivatedRoute, public dogService: DogServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.dogService.getDog(this.id).subscribe(res => {
        this.dog = res['dog'];
        console.log(res);
      })
    })
  }

}
