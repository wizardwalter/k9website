import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../shared/admin-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin;
  constructor(public adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.islogin = this.adminService.getIsAuth();
  }

  logout(){
    this.adminService.logout();
    window.location.reload();
  }
}
