import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ProfileService } from '../profile.service';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean;

  constructor(private profileService: ProfileService,private authService:AuthService) { }

  ngOnInit() {
    // Fetch the featured products and show it in popular
    this.authService.isLoggedIn().then(val=>{
      this.loggedIn=val;
    });
  }

  getUserDetails() {
  //console.log("The details are "+JSON.stringify(userDetails))
  this.profileService.getUserDetails().subscribe(
    data => {
      if (data) {
        alert("success "+data);
      } else {
        alert("failed");
      }
    },
    err => console.log(err)
   );
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

  getName(){
    return this.authService.getName();
  }

}
