import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExerciseComponent } from 'src/app/dialogues/dialog-exercise/dialog-exercise.component';
import { Dialog } from 'src/app/enums/dialog';
import { DialogAskDeleteComponent } from 'src/app/dialogues/dialog-ask-delete/dialog-ask-delete/dialog-ask-delete.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Exercise } from 'src/app/models/models';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  exercises: Exercise[] = [];
  constructor(
    private dataService: DataServiceService,
    public dialog: MatDialog
  ) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.dataService.getAllExercises().subscribe((exercises) => {
      this.exercises = exercises;
    });
  }

  getAccordionData(): any {
    const data: any = {
      toLoop: this.exercises,
      topLayer: 'muscle',
      type: Dialog.EDIT,
    };
    return data;
  }

  openEditExercise(index: number) {
    const dialogRef = this.dialog.open(DialogExerciseComponent, {
      width: '90%',
      height: '90%',
      minWidth: 370,
      data: { data: this.exercises, index: index, dialogName: Dialog.EDIT },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  openDeleteExercise(index: number) {
    const dialogRef = this.dialog.open(DialogAskDeleteComponent, {
      width: '60%',
      height: '200px',
      data: { data: this.exercises, index: index, answer: false },
    });
    const sub = dialogRef.componentInstance.Emitter.subscribe((e) => {
      if (e) this.deleteExercise(this.exercises[index].exercise_id);
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.Emitter.unsubscribe();
    });
  }

  deleteExercise(index: string): void {
    this.dataService.deleteExercise(index).subscribe(() => {
      this.exercises = this.exercises.filter(
        (exercise) => exercise.exercise_id !== index
      );
    });
  }

  // Add Exercise Dialog
  openAddExercise() {
    const dialogRef = this.dialog.open(DialogExerciseComponent, {
      width: '90%',
      height: '90%',
      minWidth: 370,
      data: { data: this.exercises, dialogName: Dialog.CREATE },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  // Catch the Dialog Event
  catchDialogEvent(value: any) {
    switch (value.event) {
      case Dialog.START:
        break;
      case Dialog.EDIT:
        this.openEditExercise(value.source);
        break;
      case Dialog.DELETE:
        this.openDeleteExercise(value.source);
        break;
    }
  }

  getExercises(): Exercise[] {
    return this.exercises;
  }
}
