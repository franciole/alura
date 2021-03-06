/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DestaquesComponent } from './destaques.component';

describe('DestaquesComponent', () => {
  let component: DestaquesComponent;
  let fixture: ComponentFixture<DestaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
