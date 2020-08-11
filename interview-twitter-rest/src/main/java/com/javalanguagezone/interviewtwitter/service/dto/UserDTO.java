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
  private Integer numberOfFollower;
  private Integer numberOfFollowing;
  private Integer numberOfTweets;

  public UserDTO(User user) {
    this.id = user.getId();
    this.username = user.getUsername();
    this.numberOfFollower = user.getFollowers().size();
    this.numberOfFollowing = user.getFollowing().size();
    this.numberOfTweets = user.getTweets().size();
  }
}
