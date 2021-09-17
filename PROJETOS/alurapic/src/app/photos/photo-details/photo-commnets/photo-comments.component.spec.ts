/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PhotoCommnentsComponent } from "./photo-comments.component";

describe("PhotoCommnetsComponent", () => {
  let component: PhotoCommnentsComponent;
  let fixture: ComponentFixture<PhotoCommnentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoCommnentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCommnentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
