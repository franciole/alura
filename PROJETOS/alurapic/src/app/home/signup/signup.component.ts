import { PlataformDetectorService } from "./../../core/plataform-detector/plataform-detector.service";
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { lowerCaseValidator } from "src/app/shared/validators/home-case.validators";
import { SignUpService } from "./signup.service";
import { NewUser } from "./new-user";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [UserNotTakenValidatorService],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild("emailInput") emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      fullName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        "",
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        this.userNotTakenValidatorService.checkUserNameTaken(),
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
    this.plataformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  sigunp() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
      .signup(newUser)
      .subscribe(() => this.router.navigate([""])),
      (err) => console.log(err);
  }
}