import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private messenger: Subject<any> = new Subject();

  constructor() { }

  getMessenger():Observable<any>{
    return this.messenger.asObservable();
  }

  showGenericBackendError(){
    this.messenger.next({severity:'error',  summary: "Some error occured", 
    detail: "Failed to perform operation due to system failure. Please try again."});
  }
  
  showSuccess(title:string,text:string) {
    this.messenger.next({severity:'success', summary: title, detail: text});
  }

  showInfo(title:string,text:string) {
      this.messenger.next({severity:'info',  summary: title, detail: text});
  }

  showWarn(title:string,text:string) {
      this.messenger.next({severity:'warn',  summary: title, detail: text});
  }

  showError(title:string,text:string) {
      this.messenger.next({severity:'error',  summary: title, detail: text});
  }

}
