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

  $user: Observable<UserModel>;

  numberOfTweets: number;
  numberOfFollower: number;
  numberOfFollowing: number;

  constructor(private tweetService: TweetService, private userService: UserService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {

      this.$user = this.userService.fetchForUser();

      this.$user.subscribe(result => {this.numberOfFollowing = result.numberOfFollowing;
                                       this.numberOfFollower = result.numberOfFollower;
                                       this.numberOfTweets = result.numberOfTweets;});
    });
  }
}
