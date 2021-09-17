import { PlataformDetectorService } from "./../../../core/plataform-detector/plataform-detector.service";
import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: "[immeditateClick]",
})
export class ImmeditateClickDirective implements OnInit {
  constructor(
    private element: ElementRef,
    private plataformDetectorService: PlataformDetectorService
  ) {}
  ngOnInit(): void {
    this.plataformDetectorService.isPlatformBrowser &&
      this.element.nativeElement.click();
  }
}
