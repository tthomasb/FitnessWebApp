import { ExerciseDataModel } from './exercise-data-model.model';
import { ExerciseModel } from './exercise-model.model';

export class WorkoutData {
  name: String;
  exerciseMap:Map<ExerciseModel,ExerciseDataModel>;
  type: String;
  description: String;
  workout_id?:string;

  constructor(
    name: string,
    description: string,
    type: string,
    exerciseMap:Map<ExerciseModel,ExerciseDataModel>,

  ) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.exerciseMap=exerciseMap;
  }
}
