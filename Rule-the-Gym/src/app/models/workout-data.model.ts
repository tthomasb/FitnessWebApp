import { ExerciseModel } from './exercise-model.model';
import { Sets } from './sets.model';

export class WorkoutData {
  name: String;
  exercises: ExerciseModel[];
  sets: String;
  reps: String;
  type: String;
  breaktime: String;
  description: String;

  constructor(
    name: string,
    description: string,
    exercises: ExerciseModel[],
    sets: String,
    reps: String,
    type: string,
    breaktime: String
  ) {
    this.name = name;
    this.exercises = exercises;
    this.sets = sets;
    this.reps = reps;
    this.breaktime = breaktime;
    this.type = type;
    this.description = description;
  }
}

// export namespace WorkoutData{
//     export function parseWorkoutData(obj:any):WorkoutData{
//         const data=new WorkoutData();
//         let ctr=0;Node
//         for(const key of obj.keys()){
//             if(!obj[key]){
//                 throw new Error('Key is empty!')
//             }else{
//                 if(obj[key] instanceof ExerciseModel){
//                         const exercises: any[]=[];
//                         exercises[ctr]=ExerciseModel.parseExerciseModel(obj[key]);
//                         ctr++;
//                 }
//             }
//         }
//         return new WorkoutData;
//     }
// }
