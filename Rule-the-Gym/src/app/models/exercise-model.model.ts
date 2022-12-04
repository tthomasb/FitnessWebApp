export class ExerciseModel {
    
    name:string;
    description:string;
    muscle:string;
    equipment:string;
    exercise_Id?:string;
constructor(name:string,description:string, muscle:any, equipment:any){
this.name=name;
this.description=description;
this.muscle=muscle;
this.equipment=equipment;

}

}

export namespace ExerciseModel {
    export function parseExerciseModel(obj:any):ExerciseModel{
        const data=new ExerciseModel(obj.name,obj.description,obj.reps,obj.equipment);
        return data;

    }
}
