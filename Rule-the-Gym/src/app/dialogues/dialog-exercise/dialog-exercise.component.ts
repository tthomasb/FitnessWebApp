import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exercise',
  templateUrl: './dialog-exercise.component.html',
  styleUrls: ['./dialog-exercise.component.scss']
})
export class DialogExerciseComponent implements OnInit {

  constructor( @Inject (MAT_DIALOG_DATA) public data: any,
    public DialogRef:MatDialogRef<DialogExerciseComponent>,
    public dialog: MatDialog
    ) {
    
   }

  ngOnInit(): void {
    console.log(this.data);
  }

}
