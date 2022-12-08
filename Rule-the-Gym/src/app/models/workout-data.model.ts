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
