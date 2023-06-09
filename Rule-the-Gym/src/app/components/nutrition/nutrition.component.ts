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
    var date = new Date();
    date = new Date(date.setMonth(month));  
    date = new Date(date.getFullYear(), date.getMonth(), 0)
    return Array(date.getDate()).fill(0).map((x, i) => ++i)
  }

  getMonthLabel() {
    
  }

  ngOnInit(): void {
    // const startDate = new Date(2023, 0, 1); // Startdatum: 1. Januar 2023
    // const endDate = new Date(2023, 11, 31); // Enddatum: 31. Dezember 2023
    // const dayMs = 24 * 60 * 60 * 1000; // Anzahl der Millisekunden pro Tag
    // for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    //   this.dates.push(new Date(date.getTime())); // Erstelle ein neues Date-Objekt für jeden Tag und füge es zu "dates" hinzu
    // }

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
      data: { dialogName: Dialog.ADD }
    });
  }
}
