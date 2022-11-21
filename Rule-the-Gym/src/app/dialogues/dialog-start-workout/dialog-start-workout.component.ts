import { Component, OnInit } from '@angular/core';
import { DialogStartWorkoutTimeComponent } from 'src/app/dialogues/dialog-start-workout/dialog-start-workout-time/dialog-start-workout-time.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-start-workout',
  templateUrl: './dialog-start-workout.component.html',
  styleUrls: ['./dialog-start-workout.component.scss']
})
export class DialogStartWorkoutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  startTime() {
    const dialogRef = this.dialog.open(DialogStartWorkoutTimeComponent, {
      width: '60%',
      height: '60%',
    });
  }
}
