import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {

  bmi!: number;
  weight!: string;
  height!: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Method to calculate BMI based on user input
  getBmi(): void {
    const parsedWeight = parseInt(this.weight);
    const parsedHeight = parseInt(this.height);
    if (parsedHeight !== 0 && !isNaN(parsedWeight) && !isNaN(parsedHeight)) {
      this.bmi = parsedWeight / ((parsedHeight * parsedHeight) / 10000);
      alert(`Your BMI is ${this.bmi.toFixed(2)}`);
    } else {
      alert("Fill in valid Data");
    }
  }

}
