import { ExerciseModel } from './exercise-model.model';

export class WorkoutData {
  name: String;
  exercises: ExerciseModel[];
  sets: String[];
  reps: String[];
  weight?: String[];
  breaktime: String[];
  type: String;
  description: String;
  workout_id?:string;
  
  constructor(
    name: string,
    description: string,
    exercises: ExerciseModel[],
    sets: String[],
    reps: String[],    
    breaktime: String[],
    type: string,
    weight?: String[],
  ) {
    this.name = name;
    this.exercises = exercises;
    this.sets = sets;
    this.reps = reps;
    this.breaktime = breaktime;
    this.type = type;
    this.description = description;
    this.weight= weight;
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
