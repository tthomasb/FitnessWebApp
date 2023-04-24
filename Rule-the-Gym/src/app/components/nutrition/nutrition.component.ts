import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  constructor() { }

  lotsOfTabs = new Array(30).fill(0).map((_, index) => `${index}`);

  ngOnInit(): void {
  }

}
