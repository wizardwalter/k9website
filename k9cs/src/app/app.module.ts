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


 



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BlogComponent,
    
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
