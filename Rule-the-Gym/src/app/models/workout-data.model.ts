import { ExerciseModel } from "./exercise-model.model";

export class WorkoutData {

    name?: string;
    exercises?: ExerciseModel[];

}

export namespace WorkoutData{
    export function parseWorkoutData(obj:any):WorkoutData{
        const data=new WorkoutData();
        let ctr=0;Node
        for(const key of obj.keys()){
            if(!obj[key]){
                throw new Error('Key is empty!')
            }else{
                if(obj[key] instanceof ExerciseModel){
                        const exercises: any[]=[];
                        exercises[ctr]=ExerciseModel.parseExerciseModel(obj[key]);
                        ctr++;
                }
            }
            
        }
        return new WorkoutData;
    }
}
