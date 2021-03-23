import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'blogs', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
