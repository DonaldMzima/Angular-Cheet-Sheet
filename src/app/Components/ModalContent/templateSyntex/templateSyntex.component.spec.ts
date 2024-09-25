/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemplateSyntexComponent } from './templateSyntex.component';

describe('TemplateSyntexComponent', () => {
  let component: TemplateSyntexComponent;
  let fixture: ComponentFixture<TemplateSyntexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSyntexComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
