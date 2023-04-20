import { Component, OnInit } from '@angular/core';
import { createLoopVariable } from 'typescript';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {

  bmi!: number;
  result!: string;
  weight!: string;
  height!: string;
  gender!: string;
  age!: string;

  constructor() { 
    this.gender = "Male";
    this.bmi = 0;
    this.result = "-";
   }

  ngOnInit(): void {
  }

  // Method to get the BMI category based on the BMI value
  getAdvancedBmiCategoryForMan(): string {
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

  getAdvancedBmiCategoryForWoman(): string {
    if (this.bmi < 15) {
      return "Severe Thinness";
    } else if (this.bmi >= 15 && this.bmi < 16) {
      return "Moderate Thinness";
    } else if (this.bmi >= 16 && this.bmi < 17.5) {
      return "Mild Thinness";
    } else if (this.bmi >= 17.5 && this.bmi < 24) {
      return "Normal";
    } else if (this.bmi >= 24 && this.bmi < 29) {
      return "Overweight";
    } else if (this.bmi >= 19 && this.bmi < 34) {
      return "Obese Class I";
    } else if (this.bmi >= 34 && this.bmi < 39) {
      return "Obese Class II";
    } else if (this.bmi >= 39) {
      return "Obese Class III";
    } else {
      return "No BMI calculated";
    }
  }

  //Change Gender Method
  changeGender(gender: string) {
    this.gender = gender;
    console.log(this.gender);
  }
  
  // Method to calculate BMI based on height, weight and gender input
  getBmi() {
    const parsedWeight = parseInt(this.weight);
    const parsedHeight = parseInt(this.height);

  /*  if (parsedHeight !== 0 && !isNaN(parsedWeight) && !isNaN(parsedHeight)) {
      this.bmi = parsedWeight / (Math.pow(parsedHeight, 2)/10000);
      this.result = `Your BMI is ${this.bmi.toFixed(2)} and you are ${this.getAdvancedBmiCategoryForMan()}`;
    } else {
      this.result = "Fill in valid data";
    }
  } */

  if(this.gender == "Male"){
      if (parsedHeight !== 0 && !isNaN(parsedWeight) && !isNaN(parsedHeight)) {
        this.bmi = parsedWeight / (Math.pow(parsedHeight, 2)/10000);
        this.result = `Your BMI is ${this.bmi.toFixed(2)} and you are ${this.getAdvancedBmiCategoryForMan()}`;
      } else {
        this.result = "Fill in valid data";
      }
    } else {
      if (parsedHeight !== 0 && !isNaN(parsedWeight) && !isNaN(parsedHeight)) {
        this.bmi = parsedWeight / (Math.pow(parsedHeight, 2)/10000);
        this.result = `Your BMI is ${this.bmi.toFixed(2)} and you are ${this.getAdvancedBmiCategoryForWoman()}`;
      } else {
        this.result = "Fill in valid data";
      }
    }
  }

  
}