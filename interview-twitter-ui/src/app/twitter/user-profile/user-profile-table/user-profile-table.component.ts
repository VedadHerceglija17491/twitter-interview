import { Component, Input } from '@angular/core';
import {TweetModel} from "../../../models/tweet.model";


@Component({
  selector: 'app-user-profile-table',
  templateUrl: './user-profile-table.component.html',
  styleUrls: ['./user-profile-table.component.css']
})
export class UserProfileTableComponent  {
  @Input() tweets: TweetModel[];
  @Input() numberOfTweets: number;
  @Input() numberOfFollower: number;
  @Input()  numberOfFollowing: number;
}
