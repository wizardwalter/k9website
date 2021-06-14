import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogByIdComponent } from './blog-by-id/blog-by-id.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DogsByIdComponent } from './dogs-by-id/dogs-by-id.component';
import { DogsComponent } from './dogs/dogs.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'blogs', component: BlogComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'dogs/:id', component: DogsByIdComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'blogs/create', component: CreateBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
