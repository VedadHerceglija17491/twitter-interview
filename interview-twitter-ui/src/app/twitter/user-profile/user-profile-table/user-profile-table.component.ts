import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-table',
  templateUrl: './user-profile-table.component.html',
  styleUrls: ['./user-profile-table.component.css']
})
export class UserProfileTableComponent implements OnInit {
  @Input() tweets: TweetModel[];
}
