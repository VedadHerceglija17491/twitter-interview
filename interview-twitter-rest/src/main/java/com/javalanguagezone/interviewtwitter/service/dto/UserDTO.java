package com.javalanguagezone.interviewtwitter.service.dto;

import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.service.TweetService;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import static lombok.AccessLevel.PRIVATE;

@Getter
@NoArgsConstructor(access = PRIVATE)
public class UserDTO {
  private Long id;
  private String username;
  private Integer NumberOfFollower;
  private Integer NumberOfFollowing;
  private Integer NumberOfTweets;
  public UserDTO(User user) {
    this.id = user.getId();
    this.username = user.getUsername();
    this.NumberOfFollower = user.getFollowers().size();
    this.NumberOfFollowing = user.getFollowing().size();
    this.NumberOfTweets = user.getTweets().size();
  }
}
