import { db } from "../../../../database";

export const workoutEditExercise = {
  method: "PUT",
  path: "/api/workout/exercise/{workout_exercise_id}",
  handler: async (req, h) => {
    const { workout_exercise_id } = req.params;
    const { exercisepause } = req.payload;
    await db
      .query(
        `
              UPDATE workout_exercise
                SET exercisepause = $1
                WHERE workout_exercise_id=$2
          `,
        [exercisepause, workout_exercise_id]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });
    const { results } = await db.query(
      "SELECT * FROM workout_exercise WHERE workout_exercise_id=$1",
      [workout_exercise_id]
    );
    return results.rows[0];
  },
};
