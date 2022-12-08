export class ExerciseDataModel {
    sets: string;
  reps: string;
  weight?: string;
  breaktime: string;

  constructor(sets:string,reps:string,breaktime:string,weight?:string){
    this.sets=sets;
    this.reps=reps;
    this.breaktime=breaktime;
    this.weight=weight
  }
}
