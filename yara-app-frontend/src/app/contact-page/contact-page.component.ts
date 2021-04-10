import { Component, OnInit } from '@angular/core';
import { ContactPersonService } from '../contact-person.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

personModel:any = {};
contactPersons: Array<string>;

  constructor(private contactPersonService: ContactPersonService) { }

  ngOnInit() {
    this.contactPersonService.fetchAllContactPersons().subscribe(
      (data) => {
       // this.contactPersons = data;
      }, 
      err => console.log(err)
    )
  }

  leaveReply(personDetails) {
    console.log(personDetails);
  }
}
