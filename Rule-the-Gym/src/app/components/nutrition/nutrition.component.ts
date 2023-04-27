import { Component, OnInit } from '@angular/core';
import { DialogAddNutritionComponent } from 'src/app/dialogues/dialog-add-nutrition/dialog-add-nutrition.component';
import { Dialog } from 'src/app/enums/dialog';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';


interface Tab {
  label: string;
  date: Date;
  content: string;
}

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  dates: Date[] = [];
  activeTabIndex = 0;

  constructor(public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    // Fülle die Variable "dates" mit allen Terminen im Jahr
    const startDate = new Date(2023, 0, 1); // Startdatum: 1. Januar 2023
    const endDate = new Date(2023, 11, 31); // Enddatum: 31. Dezember 2023
    // const dayMs = 24 * 60 * 60 * 1000; // Anzahl der Millisekunden pro Tag
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      this.dates.push(new Date(date.getTime()));
    }

    // Setze das aktive Tab auf das heutige Datum
    const today = new Date();
    const todayIndex = this.dates.findIndex(d => d.toDateString() === today.toDateString());
    console.log(today)
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
