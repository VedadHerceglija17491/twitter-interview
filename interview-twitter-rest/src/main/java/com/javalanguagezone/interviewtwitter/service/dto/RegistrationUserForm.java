package com.javalanguagezone.interviewtwitter.service.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RegistrationUserForm {
  @NotNull
  @Size(min = 3)
  private String userName;

  @NotNull
  @Size(min = 3)
  private String fullName;

  @NotNull
  @Size(min = 8)
  private String password;
}
