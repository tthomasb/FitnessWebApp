export class ExerciseModel {
  name: string;
  description: string;
  reps: number;
  sets: number;
  pause: number;
  muscle: string;
  constructor(
    name: any,
    description: any,
    sets: any,
    reps: any,
    pause: any,
    muscle: any
  ) {
    this.name = name;
    this.description = description;
    this.reps = reps;
    this.sets = sets;
    this.pause = pause;
    this.muscle = muscle;
  }
}

export namespace ExerciseModel {
  export function parseExerciseModel(obj: any): ExerciseModel {
    const data = new ExerciseModel(
      obj.name,
      obj.description,
      obj.reps,
      obj.sets,
      obj.pause,
      obj.muscle
    );
    return data;
  }
}
