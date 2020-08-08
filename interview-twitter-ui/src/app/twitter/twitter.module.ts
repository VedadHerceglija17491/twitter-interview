import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwitterRoutingModule} from "./twitter-routing.module";
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../shared/shared.module";
import {TweetService} from "../services/tweet/tweet.service";
import { UserProfileContainerComponent } from './user-profile/user-profile-container/user-profile-container.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TwitterRoutingModule,
  ],
  declarations: [
    MainComponent,
    UserProfileContainerComponent,
  ],
  providers: [TweetService]
})
export class TwitterModule {
}
