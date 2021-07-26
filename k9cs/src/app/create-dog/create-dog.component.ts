import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../_enviroment/env.js';
import { DogServiceService } from '../shared/dog-service.service';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.css'],
})
export class CreateDogComponent implements OnInit {
  constructor(public dogService: DogServiceService, public router: Router) {}

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-98, 35], // starting position
      zoom: 2, // starting zoom
    });

    map.on('mousemove', function (e) {
      document.getElementById('info').innerHTML = JSON.stringify(
        e.lngLat.wrap()
      );
    });
  }

  file: File;
  fileName: string = 'No Image Selected';
  imageUrl: string | ArrayBuffer =
    'https://bulma.io/images/placeholders/256x256.png';

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
  onSubmit(formObj: NgForm) {
    let Data = {
      title: formObj.value.title,
      text: formObj.value.text,
      author: formObj.value.author,
    };
    let formData = new FormData();
    let userObj = formObj.value;

    formData.append('photo', this.file);
    formData.append('title', Data.title);
    formData.append('text', Data.text);
    formData.append('author', Data.author);
    formData.append('userObj', JSON.stringify(userObj));
    console.log(formData);
    this.dogService.addDog(formData).subscribe();
    this.router.navigateByUrl('/dogs');
  }
}
