import { Component, Input } from '@angular/core';
import { Set_History, WorkoutExercise, Set } from 'src/app/models/models';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-dialog-start-workout-item',
  templateUrl: './dialog-start-workout-item.component.html',
  styleUrls: ['./dialog-start-workout-item.component.scss'],
})
export class DialogStartWorkoutItemComponent {
  @Input() exercise?: WorkoutExercise;
  @Input() workoutExercise?: WorkoutExercise;
  setHistory: Set_History[] = [];
  sets: Set[] = [];
  setMap = new Map<number, Set_History>();

  constructor(public dataService: DataServiceService) {}

  // Load Set Data
  loadSetHistoryData() {
    this.setHistory = [];
    if (!this.workoutExercise || this.sets.length) return;
    this.dataService
      .getSetsByWorkoutExerciseId(this.workoutExercise.workout_exercise_id)
      .subscribe((data) => {
        this.sets = data;
        for (let set of data) {
          this.dataService.getSetHistoryBySetId(set.set_id).subscribe(
            (lambda) => {
              this.setHistory.push(lambda);
              this.setMap.set(set.set_id, lambda);
            },
            (error) => {
              if (error.status === 404) {
                this.setMap.set(set.set_id, {
                  weight: 0,
                  reps: 0,
                } as Set_History);
              }
            }
          );
        }
      });
  }

  getMapKeys(): number[] {
    return [...this.setMap.keys()];
  }

  getMapHistories() {
    return this.getMapKeys().map((x) => this.getMapParam(x));
  }

  getMapParam(SetId: number) {
    let res = this.setMap.get(SetId);
    return res ?? ({ weight: 0, reps: 0 } as Set_History);
  }
}
