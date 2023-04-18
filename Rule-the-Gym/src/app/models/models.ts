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
  user_id: number
}
