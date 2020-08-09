import { Component, OnInit } from '@angular/core';
import {TweetModel} from "../../../models/tweet.model";
import {UserModel} from "../../../models/user.model";
import {TweetService} from "../../../services/tweet/tweet.service";
import {UserService} from "../../../services/user/user.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.css']
})
export class UserProfileViewComponent implements OnInit {

  $tweets: Observable<TweetModel[]>;
  $follower: Observable<UserModel[]>;
  $following: Observable<UserModel[]>;

  userName: string;
  numberOfTweets: number;
  numberOfFollower: number;
  numberOfFollowing: number;

  constructor(private tweetService: TweetService, private userService: UserService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userName = params['username'];

      this.$tweets = this.tweetService.fetchForUser(this.userName);
      this.$follower = this.userService.fetchFollower();
      this.$following = this.userService.fetchFollowing();

      this.$follower.subscribe(result => {this.numberOfFollower = result.length;});
      this.$following.subscribe(result => {this.numberOfFollowing = result.length;});
      this.$tweets.subscribe(result => { this.numberOfTweets = result.length;});
    });
  }
}
