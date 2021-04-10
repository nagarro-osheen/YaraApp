import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactPersonService {

  constructor(private http:HttpClient) { }
  contactUrl: string = '';

  fetchAllContactPersons() {
    return this.http.get(this.contactUrl);
  }
}
