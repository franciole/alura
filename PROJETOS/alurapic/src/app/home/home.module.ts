import { SignUpService } from "./signup/signup.service";
import { VMessageModule } from "./../shared/components/vmessage/vmessage.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { SignInComponent } from "./signin/signin.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignUpComponent } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule,
  ],
  providers: [SignUpService],
})
export class HomeModule {}
