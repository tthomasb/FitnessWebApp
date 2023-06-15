import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-dialog-exercise',
  templateUrl: './dialog-exercise.component.html',
  styleUrls: ['./dialog-exercise.component.scss'],
})
export class DialogExerciseComponent implements OnInit {
  exercise_id!: string;
  exercisename!: string;
  description!: string;
  muscle!: string;
  equipment!: string;
  user_id!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public DialogRef: MatDialogRef<DialogExerciseComponent>,
    public dialog: MatDialog,
    private DataserviceService: DataServiceService
  ) {}

  ngOnInit(): void {
    //    console.log(this.data);
    this.exercise_id = this.data.data[this.data.index].exercise_id;
    this.exercisename = this.data.data[this.data.index].exercisename;
    this.description = this.data.data[this.data.index].description;
    this.muscle = this.data.data[this.data.index].muscle;
    this.equipment = this.data.data[this.data.index].equipment;
    this.user_id = this.data.data[this.data.index].user_id;
  }

  // Safe Exercise Data
  safeData() {
    if (this.data.dialogName === 'Edit') {
      this.DataserviceService
      .editExercise(this.exercise_id, this.exercisename, this.description, this.muscle, this.equipment)
      .subscribe(() => {});
    }

    //Safe data Create
    if (this.data.dialogName === 'Create') {
      this.DataserviceService
      .createExercise(this.exercisename, this.description, this.muscle, this.equipment)
      .subscribe(() => {})
    }
  }
}
