import { Component, OnInit } from '@angular/core';
import { DialogAddNutritionComponent } from 'src/app/dialogues/dialog-add-nutrition/dialog-add-nutrition.component';
import { Dialog } from 'src/app/enums/dialog';
import { MatDialog } from '@angular/material/dialog';

interface Tab {
  label: string;
  date: Date;
  content: string;
}

export interface NutritionalValues {
  name: string;
  kcal: number;
  carbs: number;
  protein: number;
  fat: number;
}

const ELEMENT_DATA: NutritionalValues[] = [
  {name: 'Chicken', kcal: 100, carbs: 100, protein: 100, fat: 100},
];

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'kcal', 'carbs', 'protein', 'fat'];
  dataSource = ELEMENT_DATA;

  // Data for Overview
  goal!: number|undefined;
  eaten!: number|undefined;
  remaining!: number|undefined;
  total_calories!: number|undefined;
  total_fat!: number|undefined;
  total_carbs!: number|undefined;
  total_protein!: number|undefined;

  // Data for Food
  name!: string|undefined;
  calories!: number|undefined;
  fat!: number|undefined;
  carbs!: number|undefined;
  protein!: number|undefined;

  dates: Date[] = [];
  months: number[] = Array(12).fill(0).map((x, i) => ++i);
  activeTabIndexMonth = 0;
  activeTabIndexDay = 0;

  constructor(public dialog: MatDialog) {}

  getDays(month:number) {
    let date = new Date();
    date = new Date(date.setMonth(month));
    date = new Date(date.getFullYear(), date.getMonth(), 0)
    return Array(date.getDate()).fill(0).map((x, i) => ++i)
  }

  ngOnInit(): void {
    // Setze das aktive Tab auf das heutige Datum
    const today = new Date();
    this.activeTabIndexDay = today.getDate() - 1;
    this.activeTabIndexMonth = today.getMonth();
  }

  testAlert() {
    alert('test');
  }

  // Öffnet den Dialog zum Hinzufügen eines Nahrungsmittels
  openAddNutritionDialog() {
    const dialogRef = this.dialog.open(DialogAddNutritionComponent, {
      width: '90%',
      height: '90%',
      minWidth: 370,
      data: { dialogName: Dialog.ADD }
    });
  }
}
