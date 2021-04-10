import { Component, OnInit } from '@angular/core';
import { ProductConstants } from '../constants/products';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  personModel:any = {};
  tweetMsg: String;

  constructor() { }

  ngOnInit() {
    this.tweetMsg = ProductConstants.DEFAULT_TWEET_MSG;
  }

  leaveReply(personDetails) {
    console.log(personDetails);
  }

}
