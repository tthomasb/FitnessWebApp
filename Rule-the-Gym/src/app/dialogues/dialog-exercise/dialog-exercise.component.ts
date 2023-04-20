import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { ExerciseModel } from 'src/app/models/exercise-model.model';

@Component({
  selector: 'app-dialog-exercise',
  templateUrl: './dialog-exercise.component.html',
  styleUrls: ['./dialog-exercise.component.scss'],
})
export class DialogExerciseComponent implements OnInit {
  name!: string;
  description!: string;
  muscle!: string;
  equipment!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public DialogRef: MatDialogRef<DialogExerciseComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //    console.log(this.data);
    this.name = this.data.data[this.data.index].name;
    this.description = this.data.data[this.data.index].description;
    this.muscle = this.data.data[this.data.index].muscle;
    this.equipment = this.data.data[this.data.index].equipment;
  }

  // Safe Exercise Data
  safeData() {
    console.log(this.data.data);
    console.log(this.name);
    if (this.data.dialogName === 'Edit') {
      this.data.data[this.data.index].name = this.name;
      this.data.data[this.data.index].description = this.description;
      this.data.data[this.data.index].muscle = this.muscle;
      this.data.data[this.data.index].equipment = this.equipment;
      console.log(this.data.data);
    }

    //Safe data Create
    if (this.data.dialogName === 'Create') {
      this.data.data.push(
        new ExerciseModel(
          this.name,
          this.description,
          this.muscle,
          this.equipment
        )
      );
    }
  }
}
