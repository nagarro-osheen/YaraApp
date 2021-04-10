import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  uploadPath: string = 'https://api.cloudinary.com/v1_1/dynyihryy/upload';
  presetName: string =  'rdv5w76r';
  constructor(private http: HttpClient) { }
  
  uploadPhoto(event:any):Observable<object> {
    const fd = new FormData();
    fd.append('folder','products');
    fd.append('file', event.target.files[0]);
    fd.append('upload_preset', this.presetName);
    return this.http.post(this.uploadPath, fd);
  }
}
