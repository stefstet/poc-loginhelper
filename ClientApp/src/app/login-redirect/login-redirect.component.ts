import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
  styleUrls: ['./login-redirect.component.css']
})
export class LoginRedirectComponent implements OnInit {

  public realm : string = "792dac88-0d4b-4fe5-bbda-c04d1a83c068";

  constructor() { }

  ngOnInit() {
  }

  redirectToLoginPage() : void {
   
    window.location.href = "http://localhost:8080/auth/realms/"+ this.realm +"/protocol/openid-connect/auth?" + 
                          "response_type=token"+
                          "&scope=openid"+
                          "&client_id=vm-service"+
                          "&state=blabla"+
                          "&nonce=2lk(Z)"+
                          "&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-redirect-result";
    
  }

}
