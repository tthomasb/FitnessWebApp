export class ExerciseDataModel {
    sets: String[];
  reps: String[];
  weight?: String[];
  breaktime: String[];

  constructor(sets:String[],reps:String[],breaktime:String[],weight?:String[]){
    this.sets=sets;
    this.reps=reps;
    this.breaktime=breaktime;
    this.weight=weight
  }
}
