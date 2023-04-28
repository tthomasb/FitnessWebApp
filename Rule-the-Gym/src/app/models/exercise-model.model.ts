export class ExerciseModel {
  exercise_id:number;
  exercisename: string;
  description: string;
  equipment: string;
  muscle: string;
  user_id: number;
  
  
  constructor(id:number, e_id:number, name: string, description: string, muscle: string, equipment: any) {
    this.exercise_id =e_id
    this.exercisename = name;
    this.description = description;
    this.muscle = muscle;
    this.equipment = equipment;
    this.user_id=id
  }
}

export namespace ExerciseModel {
  export function parseExerciseModel(obj: any): ExerciseModel {
    const data = new ExerciseModel(
      obj.user_id,
      obj.exercise_id,
      obj.exercisename,
      obj.description,
      obj.muscle,
      obj.equipment
    );
    return data;
  }
}
