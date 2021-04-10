import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Address } from './models/address.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  httpPrefix: string = environment.httpPrefix;
  uploadPath: string = 'https://api.cloudinary.com/v1_1/dynyihryy/upload';
  usersApiPath: string = '/profile/users/';
  addressApiPath: string = '/addresses/';

  constructor(private http: HttpClient) { }

  saveProfileOnCdn(picture) {
    return this.http.post(this.uploadPath, picture);
  }

  saveUserDetails(userDetails) {
    return this.http.put(this.httpPrefix + this.usersApiPath + '1/', userDetails);
  }

  getUserDetails(): Observable<any> {
    return this.http.get(this.httpPrefix + this.usersApiPath + '1/');
  }

  updateAddress(address: Address): Observable<any> {
    return this.http.put(this.getAddressApiPath() + address.id, address);
  }

  saveAddress(address: Address): Observable<any> {
    return this.http.post(this.getAddressApiPath(), address);
  }

  deleteAddressesForUser(): Observable<any> {
    return this.http.delete(this.getAddressApiPath());
  }
  getAddressApiPath(): string {
    return this.httpPrefix + this.usersApiPath + '1' + this.addressApiPath;
  }

}