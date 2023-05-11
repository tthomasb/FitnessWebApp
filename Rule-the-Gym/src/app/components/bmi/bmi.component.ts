import { Component, OnInit } from '@angular/core';
import { createLoopVariable } from 'typescript';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {

  // Table columns and data
  displayedColumns = ['category', 'bmi', 'risk'];
  dataSource = ELEMENT_DATA;

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

  // Observable to change the stepper orientation based on the screen size
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
    this.bmi = 0;
    this.result = "Fill in valid data";
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  // Method to get the BMI category based on the BMI value
  getAdvancedBmiCategoryForMan(): string {

    console.log(this.age+"BMI:" + this.bmi);
    const parsedAge = parseInt(this.age);

    if (parsedAge >= 1 && parsedAge <= 18) {
      if (this.bmi < 13, 2) {
        return "Severe Thinness";
      } else if (this.bmi >= 13, 2 && this.bmi < 14, 2) {
        return "Moderate Thinness";
      } else if (this.bmi >= 14, 2 && this.bmi < 15, 7) {
        return "Mild Thinness";
      } else if (this.bmi >= 15, 7 && this.bmi < 22, 2) {
        return "Normal";
      } else if (this.bmi >= 22, 2 && this.bmi < 27, 2) {
        return "Overweight";
      } else if (this.bmi >= 27, 2 && this.bmi < 32, 2) {
        return "Obese Class I";
      } else if (this.bmi >= 32, 2 && this.bmi < 37, 2) {
        return "Obese Class II";
      } else if (this.bmi >= 37, 2) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 19 && parsedAge <= 24) {
      if (this.bmi < 16.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 16.5 && this.bmi < 17.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 17.5 && this.bmi < 19.5) {
        return "Mild Thinness";
      } else if (this.bmi >= 19.5 && this.bmi < 25.5) {
        return "Normal";
      } else if (this.bmi >= 25.5 && this.bmi < 30.5) {
        return "Overweight";
      } else if (this.bmi >= 30.5 && this.bmi < 35.5) {
        return "Obese Class I";
      } else if (this.bmi >= 35.5 && this.bmi < 40.5) {
        return "Obese Class II";
      } else if (this.bmi >= 40.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 25 && parsedAge <= 34) {
      if (this.bmi < 17.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 17.5 && this.bmi < 18.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 18.5 && this.bmi < 20) {
        return "Mild Thinness";
      } else if (this.bmi >= 20 && this.bmi < 26.5) {
        return "Normal";
      } else if (this.bmi >= 26.5 && this.bmi < 31.5) {
        return "Overweight";
      } else if (this.bmi >= 31.5 && this.bmi < 36.5) {
        return "Obese Class I";
      } else if (this.bmi >= 36.5 && this.bmi < 41.5) {
        return "Obese Class II";
      } else if (this.bmi >= 41.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 35 && parsedAge <= 44) {
      if (this.bmi < 18.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 18.5 && this.bmi < 19.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 19.5 && this.bmi < 23.5) {
        return "Mild Thinness";
      } else if (this.bmi >= 23.5 && this.bmi < 28.5) {
        return "Normal";
      } else if (this.bmi >= 28.5 && this.bmi < 32.5) {
        return "Overweight";
      } else if (this.bmi >= 32.5 && this.bmi < 37.5) {
        return "Obese Class I";
      } else if (this.bmi >= 37.5 && this.bmi < 42.5) {
        return "Obese Class II";
      } else if (this.bmi >= 42.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 45 && parsedAge <= 54) {
      if (this.bmi < 19.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 19.5 && this.bmi < 20.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 20.5 && this.bmi < 22) {
        return "Mild Thinness";
      } else if (this.bmi >= 22 && this.bmi < 28.5) {
        return "Normal";
      } else if (this.bmi >= 28.5 && this.bmi < 33.5) {
        return "Overweight";
      } else if (this.bmi >= 33.5 && this.bmi < 38.5) {
        return "Obese Class I";
      } else if (this.bmi >= 38.5 && this.bmi < 43.5) {
        return "Obese Class II";
      } else if (this.bmi >= 43.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 55 && parsedAge <= 64) {
      if (this.bmi < 20.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 20.5 && this.bmi < 21.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 21.5 && this.bmi < 23) {
        return "Mild Thinness";
      } else if (this.bmi >= 23 && this.bmi < 29.5) {
        return "Normal";
      } else if (this.bmi >= 29.5 && this.bmi < 34, 5) {
        return "Overweight";
      } else if (this.bmi >= 34.5 && this.bmi < 39.5) {
        return "Obese Class I";
      } else if (this.bmi >= 39.5 && this.bmi < 44.5) {
        return "Obese Class II";
      } else if (this.bmi >= 44.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 65) {
      if (this.bmi < 21.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 21.5 && this.bmi < 22.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 22.5 && this.bmi < 24) {
        return "Mild Thinness";
      } else if (this.bmi >= 24 && this.bmi < 30.5) {
        return "Normal";
      } else if (this.bmi >= 30.5 && this.bmi < 35.5) {
        return "Overweight";
      } else if (this.bmi >= 35.5 && this.bmi < 40.5) {
        return "Obese Class I";
      } else if (this.bmi >= 40.5 && this.bmi < 45.5) {
        return "Obese Class II";
      } else if (this.bmi >= 45.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else {
      return "Please, enter your age"
    }
  }

  getAdvancedBmiCategoryForWoman(): string {

    //console.log(this.age);
    const parsedAge = parseInt(this.age);

    if (parsedAge >= 1 && parsedAge <= 18) {
      if (this.bmi < 13, 1) {
        return "Severe Thinness";
      } else if (this.bmi >= 13, 1 && this.bmi < 14, 1) {
        return "Moderate Thinness";
      } else if (this.bmi >= 14, 1 && this.bmi < 15, 6) {
        return "Mild Thinness";
      } else if (this.bmi >= 15, 6 && this.bmi < 22, 1) {
        return "Normal";
      } else if (this.bmi >= 22, 1 && this.bmi < 27, 1) {
        return "Overweight";
      } else if (this.bmi >= 27, 1 && this.bmi < 32, 1) {
        return "Obese Class I";
      } else if (this.bmi >= 32, 1 && this.bmi < 37, 1) {
        return "Obese Class II";
      } else if (this.bmi >= 37, 1) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 19 && parsedAge <= 24) {
      if (this.bmi < 15.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 15.5 && this.bmi < 165) {
        return "Moderate Thinness";
      } else if (this.bmi >= 16.5 && this.bmi < 18) {
        return "Mild Thinness";
      } else if (this.bmi >= 18 && this.bmi < 24.5) {
        return "Normal";
      } else if (this.bmi >= 24.5 && this.bmi < 29.5) {
        return "Overweight";
      } else if (this.bmi >= 29.5 && this.bmi < 34.5) {
        return "Obese Class I";
      } else if (this.bmi >= 34.5 && this.bmi < 39.5) {
        return "Obese Class II";
      } else if (this.bmi >= 39.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 25 && parsedAge <= 34) {
      if (this.bmi < 16.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 16.5 && this.bmi < 17.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 17.5 && this.bmi < 19) {
        return "Mild Thinness";
      } else if (this.bmi >= 19 && this.bmi < 25.5) {
        return "Normal";
      } else if (this.bmi >= 25.5 && this.bmi < 30.5) {
        return "Overweight";
      } else if (this.bmi >= 30.5 && this.bmi < 35.5) {
        return "Obese Class I";
      } else if (this.bmi >= 35.5 && this.bmi < 40.5) {
        return "Obese Class II";
      } else if (this.bmi >= 40.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 35 && parsedAge <= 44) {
      if (this.bmi < 17.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 17.5 && this.bmi < 18.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 18.5 && this.bmi < 20) {
        return "Mild Thinness";
      } else if (this.bmi >= 20 && this.bmi < 26.5) {
        return "Normal";
      } else if (this.bmi >= 26.5 && this.bmi < 31.5) {
        return "Overweight";
      } else if (this.bmi >= 31.5 && this.bmi < 36.5) {
        return "Obese Class I";
      } else if (this.bmi >= 36.5 && this.bmi < 41.5) {
        return "Obese Class II";
      } else if (this.bmi >= 41.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 45 && parsedAge <= 54) {
      if (this.bmi < 18.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 18.5 && this.bmi < 19.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 19.5 && this.bmi < 21) {
        return "Mild Thinness";
      } else if (this.bmi >= 21 && this.bmi < 27.5) {
        return "Normal";
      } else if (this.bmi >= 27.5 && this.bmi < 32.5) {
        return "Overweight";
      } else if (this.bmi >= 32.5 && this.bmi < 37.5) {
        return "Obese Class I";
      } else if (this.bmi >= 37.5 && this.bmi < 42.5) {
        return "Obese Class II";
      } else if (this.bmi >= 42.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 55 && parsedAge <= 64) {
      if (this.bmi < 19.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 19.5 && this.bmi < 20.5) {
        return "Moderate Thinness";
      } else if (this.bmi >= 20.5 && this.bmi < 22) {
        return "Mild Thinness";
      } else if (this.bmi >= 22 && this.bmi < 28.5) {
        return "Normal";
      } else if (this.bmi >= 28.5 && this.bmi < 33.5) {
        return "Overweight";
      } else if (this.bmi >= 33.5 && this.bmi < 38.5) {
        return "Obese Class I";
      } else if (this.bmi >= 38.5 && this.bmi < 43.5) {
        return "Obese Class II";
      } else if (this.bmi >= 43.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else if (parsedAge >= 65) {
      if (this.bmi < 20.5) {
        return "Severe Thinness";
      } else if (this.bmi >= 20.5 && this.bmi < 16) {
        return "Moderate Thinness";
      } else if (this.bmi >= 21.5 && this.bmi < 17.5) {
        return "Mild Thinness";
      } else if (this.bmi >= 23 && this.bmi < 24) {
        return "Normal";
      } else if (this.bmi >= 29.5 && this.bmi < 29) {
        return "Overweight";
      } else if (this.bmi >= 34.5 && this.bmi < 34) {
        return "Obese Class I";
      } else if (this.bmi >= 39.5 && this.bmi < 39) {
        return "Obese Class II";
      } else if (this.bmi >= 44.5) {
        return "Obese Class III";
      } else {
        return "No BMI calculated";
      }
    } else {
      return "Please, enter your age"
    }
    
  // Method to calculate BMI based on height, weight and gender input
  getBmi() {
    const parsedWeight = parseInt(this.weight);
    const parsedHeight = parseInt(this.height);

    if (this.gender == "Male") {

      if (parsedHeight !== 0 && !isNaN(parsedWeight) && !isNaN(parsedHeight)) {
        this.bmi = parsedWeight / (Math.pow(parsedHeight, 2) / 10000);
        this.result = `Your BMI is ${this.bmi.toFixed(2)} and you are ${this.getAdvancedBmiCategoryForMan()}`;
      } else {
        this.result = "Fill in valid data";
      }
    } else {
      if (parsedHeight !== 0 && !isNaN(parsedWeight) && !isNaN(parsedHeight)) {
        this.bmi = parsedWeight / (Math.pow(parsedHeight, 2) / 10000);
        this.result = `Your BMI is ${this.bmi.toFixed(2)} and you are ${this.getAdvancedBmiCategoryForWoman()}`;
      } else {
        this.result = "Fill in valid data";
      }
    }
  }
}

// BMI table interface
export interface BmiTable {
  category: string;
  bmi: string;
  risk: string;
}

// BMI table data
const ELEMENT_DATA: BmiTable[] = [
  {category: "Severe Thinness", bmi: "< 16", risk: "Very high"},
  {category: "Moderate Thinness", bmi: "16 - 17", risk: "High"},
  {category: "Mild Thinness", bmi: "17 - 18.5", risk: "Enhanced"},
  {category: "Normal", bmi: "18.5 - 25", risk: "Low"},
  {category: "Overweight", bmi: "25 - 30", risk: "Enhanced"},
  {category: "Obese Class I", bmi: "30 - 35", risk: "High"},
  {category: "Obese Class II", bmi: "35 - 40", risk: "Very high"},
  {category: "Obese Class III", bmi: "> 40", risk: "Very high"},
];

