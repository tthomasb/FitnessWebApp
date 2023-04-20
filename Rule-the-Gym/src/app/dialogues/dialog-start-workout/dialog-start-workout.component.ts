import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { DialogStartWorkoutTimeComponent } from 'src/app/dialogues/dialog-start-workout/dialog-start-workout-time/dialog-start-workout-time.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-dialog-start-workout',
  templateUrl: './dialog-start-workout.component.html',
  styleUrls: ['./dialog-start-workout.component.scss']
})
export class DialogStartWorkoutComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data: any,
  public DialogRef:MatDialogRef<DialogStartWorkoutComponent>,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // Open the dialog to set the start time
  startTime() {
    const dialogRef = this.dialog.open(DialogStartWorkoutTimeComponent, {
      width: '60%',
      height: '60%',
    });
  }
}
