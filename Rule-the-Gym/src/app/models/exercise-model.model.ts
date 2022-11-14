export class ExerciseModel {

    name:string;
    description:string;
    reps:number;
    sets:number;
    pause:number;
    muscle:string;
    equipment:string;
constructor(name:any,description:any, sets:any,reps:any,pause:any, muscle:any, equipment:any){
this.name=name;
this.description=description;
this.reps=reps;
this.sets=sets;
this.pause=pause;
this.muscle=muscle;
this.equipment=equipment;
}

}

export namespace ExerciseModel {
    export function parseExerciseModel(obj:any):ExerciseModel{
        const data=new ExerciseModel(obj.name,obj.description,obj.reps,obj.sets,obj.pause,obj.muscle,obj.equipment);
        return data;

    }
}
