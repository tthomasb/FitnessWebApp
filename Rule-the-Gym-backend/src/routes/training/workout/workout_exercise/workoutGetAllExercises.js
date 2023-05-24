import { workout_exercise_adapter } from "../../../../workout_exercise_adapter";
import { db } from "../../../database";

export const workoutGetAllExercise = {
  method: "GET",
  path: "/api/workout/exercise/{workout_id}",
  handler: async (req, h) => {
    const workout_id = req.params.workout_id;

    const { results } = await db
      .query(
        `select * from workout, exercise, workout_exercise 
          where workout.workout_id = workout_exercise.workout_id 
          AND exercise.exercise_id = workout_exercise.exercise_id 
          AND workout.workout_id=$1`,
        [workout_id]
      )
      .catch((e) => {
        console.log(e);
      });
    rows = result.rows;
    return new workout_exercise_adapter(
      rows.workout_exercise_id,
      rows.workout_id,
      rows.exxercise_id,
      rows.exercisepause,
      rows.exercisename,
      rows.description,
      rows.equipment,
      rows.muscle,
      rows.user_id
    );
  },
};
