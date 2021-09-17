import { CommonModule } from "@angular/common";
import { ImmeditateClickDirective } from "./immeditate-click.directive";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [ImmeditateClickDirective],
  imports: [CommonModule],
  exports: [ImmeditateClickDirective],
})
export class ImmeditateClickModule {}
