/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomHooksComponent } from './customHooks.component';

describe('CustomHooksComponent', () => {
  let component: CustomHooksComponent;
  let fixture: ComponentFixture<CustomHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
