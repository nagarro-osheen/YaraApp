import { Component, OnInit } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { CountriesService } from '../countries.service';
import { ProfileService } from '../profile.service';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';


@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  presetName: string = 'rdv5w76r';   // cloudianry preset name
  areAddressesValid: Boolean = false;
  usermodel: User;
  dummy: '';
  isComponentReady: boolean = false;
  selectedFile: any = null;
  uploadPic: string = null;

  constructor(private profileService: ProfileService, private countries: CountriesService) { }

  ngOnInit() {
    //  this.getProfilePicture();
    this.init();

  }

  setShippingAddressRegion(address: Address) {
    this.usermodel.shippingAddress.country = address.country;
    this.usermodel.shippingAddress.city = address.city;
    this.usermodel.shippingAddress.state = address.state;
  }

  setBillingAddressRegion(address: Address) {
    this.usermodel.billingAddress.country = address.country;
    this.usermodel.billingAddress.city = address.city;
    this.usermodel.billingAddress.state = address.state;
  }

  setShippingAddress() {
    if (this.usermodel.addresses && this.usermodel.addresses.length > 0 && !this.usermodel.sameShippingAddress) {
      this.usermodel.shippingAddress = this.usermodel.addresses ? this.usermodel.addresses.filter(address => address.shippingAddress === true)[0] : undefined;
    } else {
      this.usermodel.shippingAddress = Address.init();
    }
  }
  setBillingAddress() {
    if (this.usermodel.addresses && this.usermodel.addresses.length > 0) {
      this.usermodel.billingAddress = this.usermodel.addresses ? this.usermodel.addresses.filter(address => address.billingAddress === true)[0] : undefined;
      this.usermodel.sameShippingAddress = this.usermodel.billingAddress.shippingAddress === true;
    } else {
      this.usermodel.billingAddress = Address.init();
    }
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
    fd.append('folder', 'profile');
    fd.append('file', this.selectedFile);
    fd.append('upload_preset', this.presetName);
    this.profileService.saveProfileOnCdn(fd)
      // this.http.post(this.uploadPath, fd)
      .subscribe(res => {
        const body = res;
        this.uploadPic = body['secure_url'];
        //  console.log(this.uploadPic);
      });
  }

  private extractData(res: Response) {
    const body = res;
    console.log(body);
    return body || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return observableThrowError(errMsg);
  }

  init() {
    this.profileService.getUserDetails().subscribe(response => {
      this.usermodel = response.data;
      this.usermodel.dob = new Date(this.usermodel.dob);
      this.setBillingAddress();
      this.setShippingAddress();
      this.isComponentReady = true;
    });
  }

  sameShippingAddressChanged(value: Boolean) {
    this.usermodel.sameShippingAddress = value;
  }

  setCompletedBillingAddress(address: Address) {
    this.usermodel.billingAddress = address;
  }

  setCompletedShippingAddress(address: Address) {
    this.usermodel.shippingAddress = address;
  }

  setAddressesValid(valid: Boolean) {
    this.areAddressesValid = valid;
  }

  saveUserDetails(userDetails) {
    this.usermodel.dob = new Date(this.usermodel.dob.valueOf() - this.usermodel.dob.getTimezoneOffset() * 60000);
    console.log("The details are " + JSON.stringify(this.usermodel));

    this.setupAddressesInUserModelForSaving();
    this.profileService.deleteAddressesForUser().subscribe(data => {
      for (let i = 0; i < this.usermodel.addresses.length; i++) {
        this.profileService.saveAddress(this.usermodel.addresses[i]).subscribe(data => {
        });
      }
    });
    this.profileService.saveUserDetails(this.usermodel).subscribe(
      data => {
      },
      err => console.log(err)
    );

  }

  setupAddressesInUserModelForSaving(): any {
    this.usermodel.addresses = [];
    this.usermodel.billingAddress.id = undefined;
    this.usermodel.billingAddress.billingAddress = true;
    this.usermodel.billingAddress.shippingAddress = this.usermodel.sameShippingAddress;
    this.usermodel.addresses.push(this.usermodel.billingAddress);
    if (!this.usermodel.sameShippingAddress) {
      this.usermodel.shippingAddress.id = undefined;
      this.usermodel.shippingAddress.billingAddress = false;
      this.usermodel.shippingAddress.shippingAddress = true;
      this.usermodel.addresses.push(this.usermodel.shippingAddress);
    }
  }

}
