import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiComponent } from './bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';


describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      declarations: [ BmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the BMI correctly for a male', () => {
    const fixture = TestBed.createComponent(BmiComponent);
    const component = fixture.componentInstance;
    component.gender = 'Male';
    component.weight = '75';
    component.height = '175';
    component.age = '25';
    component.getBmi();
    expect(component.bmi).toBeCloseTo(24.49, 2);
    expect(component.result).toContain('Your BMI is 24.49 and you are Normal');
  });
  
  it('should calculate the BMI correctly for a female', () => {
    const fixture = TestBed.createComponent(BmiComponent);
    const component = fixture.componentInstance;
    component.gender = 'Female';
    component.weight = '65';
    component.height = '165';
    component.age = '25';
    component.getBmi();
    expect(component.bmi).toBeCloseTo(23.88, 2);
    expect(component.result).toContain('Your BMI is 23.88 and you are Normal');
  });
  

});
