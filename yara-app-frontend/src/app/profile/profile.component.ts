import { Component, OnInit } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { CountriesService } from '../countries.service';
import { ProfileService } from '../profile.service';
import { AuthService } from '../auth.service';
import { AuthConstants } from '../constants/auth';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  presetName:string = 'rdv5w76r';   // cloudianry preset name

  selectedFile: any = null;
  uploadPic:string=null;
  constructor(private profileService: ProfileService,private authService:AuthService) { }
  ngOnInit() {
  //  this.getProfilePicture();
  //  this.getCountries();
  }

  // getProfilePicture(): Observable<any> {
  //   const path = 'https://res.cloudinary.com/dynyihryy/image/list/samples.json';
  //   return this.http.get(path).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError), );
  // }

  uploadPicture(event) {
    this.selectedFile = event.target.files[0];
    const fd = new FormData();
    fd.append('folder','profile');  
    fd.append('file', this.selectedFile);
    fd.append('upload_preset', this.presetName);
    this.profileService.saveProfileOnCdn(fd)
    // this.http.post(this.uploadPath, fd)
     .subscribe(res => {
      const body=res;
      this.uploadPic = body['secure_url'];
    //  console.log(this.uploadPic);
    });
  }

  isUserAdmin(){
    return this.authService.checkRole(AuthConstants.ROLE_ADMIN);
  }

  getName(){
    return this.authService.getName();
  }

}
