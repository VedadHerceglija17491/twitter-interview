package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.service.UserService;
import com.javalanguagezone.interviewtwitter.service.dto.RegistrationUserForm;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Collection;

@RestController
public class UserController {

  private UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/followers")
  public Collection<UserDTO> followers(Principal principal) {
    return userService.getUsersFollowers(principal);
  }

  @GetMapping("/following")
  public Collection<UserDTO> following(Principal principal) {
    return userService.getUsersFollowing(principal);
  }

  @GetMapping("/user")
  public ResponseEntity<UserDTO> userDetails(Principal principal) {
    return ResponseEntity.ok(new UserDTO((User) userService.loadUserByUsername(principal.getName())));
  }

  @PostMapping("/sign-up")
  public ResponseEntity<?> createNewUser(@RequestBody @Valid RegistrationUserForm registrationUserForm, Errors errors) {
    userService.createUser(registrationUserForm, errors);
    return ResponseEntity.accepted().build();
  }
}
