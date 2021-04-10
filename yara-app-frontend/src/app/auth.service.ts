import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }

  isLoggedIn(){
    return this.keycloakService.isLoggedIn();
  }

  login(){
    return this.keycloakService.login();
  }

  logout(){
    return this.keycloakService.logout("http://localhost:4200");
  }

  checkRole(role:string){
    return this.keycloakService.isUserInRole(role);
  }

  getName(){
    let name = this.keycloakService.getKeycloakInstance().tokenParsed["name"]
    return name;
  }

}
