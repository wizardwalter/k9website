import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BlogComponent } from './blog/blog.component';
import { BlogByIdComponent } from './blog-by-id/blog-by-id.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsByIdComponent } from './dogs-by-id/dogs-by-id.component';


 



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BlogComponent,
    BlogByIdComponent,
    DogsComponent,
    DogsByIdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    HttpClientModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
