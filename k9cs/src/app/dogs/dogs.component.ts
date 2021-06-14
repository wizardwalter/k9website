import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../shared/dog-service.service';
import { Dog } from '../_models/dogModel';
import { environment } from '../_enviroment/env.js';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: [Dog];
  latitudes = [];
  longtitudes = [];
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  constructor(public dogService: DogServiceService) { }

   ngOnInit() {
     this.dogService.getDogs().subscribe(res=>{
      this.dogs = res['dogs'];
      this.map = new mapboxgl.Map({
        accessToken: environment.mapbox.accessToken,
        container: 'map',
        style: this.style,
        zoom: 1,
        center: [-89,37.30027528134433],
    });
     // Add map controls
     this.map.addControl(new mapboxgl.NavigationControl());
  this.dogs.forEach(oneDog => {
     new mapboxgl.Marker()
    .setLngLat([oneDog.coordinates.longtitude, oneDog.coordinates.latitude])
    .addTo(this.map)
      });
    });
  }
}








