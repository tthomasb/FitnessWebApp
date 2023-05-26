export interface Exercise{
  exercisename: string,
  description: string,
  equipment: string,
  muscle: string,
  exercise_id: string,
  user_id: string,
}

export interface Workout{
  workout_id:string,
  workoutname:string,
  type: string,
  description:string,
  user_id: string
}

export interface WorkoutExercise{
  workout_exercise_id:number,
  workout_id:number,
  exercise_id:number,
  exercisepause:number,
  exercisename:String,
  description:String,
  equipment:String,
  muscle:String,
  user_id:number
}

export interface Set{
  set_id:number,
  workout_exercise_id:number,
  reps:number,
  pause:number,
  weight:number
}

export interface Set_History{
  set_id:number,
  set_history_id:number,
  reps:number,
  weight:number,
  record_time:Date
}
