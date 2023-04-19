import { Component, OnInit } from '@angular/core';
import { createLoopVariable } from 'typescript';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {

  // Form groups for the stepper
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  stepperOrientation!: Observable<StepperOrientation>;

  value = 'Clear me';
  bmi!: number;
  result!: string;
  weight!: string;
  height!: string;
  gender!: string;
  age!: string;

  // Constructor to initialize the form builder and breakpoint observer
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) { 
    this.gender = "Male";
    this.bmi = 0;
    this.result = "-";
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
   }

  ngOnInit(): void {
  }

  // Method to get the BMI category based on the BMI value
  getAdvancedBmiCategory(): string {
    if (this.bmi < 16) {
      return "Severe Thinness";
    } else if (this.bmi >= 16 && this.bmi < 17) {
      return "Moderate Thinness";
    } else if (this.bmi >= 17 && this.bmi < 18.5) {
      return "Mild Thinness";
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      return "Normal";
    } else if (this.bmi >= 25 && this.bmi < 30) {
      return "Overweight";
    } else if (this.bmi >= 30 && this.bmi < 35) {
      return "Obese Class I";
    } else if (this.bmi >= 35 && this.bmi < 40) {
      return "Obese Class II";
    } else if (this.bmi >= 40) {
      return "Obese Class III";
    } else {
      return "No BMI calculated";
    }
  }
  
  // Method to calculate BMI based on height, weight and gender input
  getBmi() {
    const parsedWeight = parseInt(this.weight);
    const parsedHeight = parseInt(this.height);
    if (parsedHeight !== 0 && !isNaN(parsedWeight) && !isNaN(parsedHeight)) {
      this.bmi = parsedWeight / (Math.pow(parsedHeight, 2)/10000);
      this.result = `Your BMI is ${this.bmi.toFixed(2)} and you are ${this.getAdvancedBmiCategory()}`;
    } else {
      this.result = "Fill in valid data";
    }
  }

  changeGender(gender: string) {
    this.gender = gender;
    console.log(this.gender);
  }
}