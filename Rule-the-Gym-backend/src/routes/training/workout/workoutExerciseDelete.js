import { db } from "../../../database";

export const workoutExerciseDelete = {
  method: "Delete",
  path: "/api/workout/exercise/delete/{workout_exercise_id}",
  handler: async (req, h) => {
    const { workout_exercise_id } = req.params;
    await db.query(
      `
      DELETE FROM workout_exercise WHERE workout_exercise_id=$1
          `,
      [workout_exercise_id]
    ).catch((e)=>{
        return e;
    });
    return { message: "Success!" };
  },
};