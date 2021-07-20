import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdminServiceService } from "../shared/admin-service.service";

@Injectable()
export class LoginInterceptor implements HttpInterceptor{

  constructor(private adminService:AdminServiceService){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const authToken = this.adminService.getToken();
    console.log("auth token",authToken)
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authToken)
    });
    console.log("auth request",authRequest)
    return next.handle(authRequest);
  }
}
