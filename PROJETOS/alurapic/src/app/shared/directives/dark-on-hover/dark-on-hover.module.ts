import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DarkOnHoverDirective } from "./dark-on-hover.directives";

@NgModule({
  declarations: [DarkOnHoverDirective],
  imports: [CommonModule],
  exports: [DarkOnHoverDirective],
})
export class DarkOnHoverModule {}
