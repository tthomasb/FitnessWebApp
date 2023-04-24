import { db } from "../../../database";

export const workoutExerciseAddSet = {
  method: "POST",
  path: "/api/workout/exercise/{workout_exercise_id}/set",
  handler: async (req, h) => {
    const { workout_exercise_id } = req.params;
    const { reps, pause, weight } = req.payload;
    await db
      .query(
        `
      INSERT INTO set (workout_exercise_id, reps, pause, weight)
      VALUES ($1, $2, $3, $4);
          `,
        [workout_exercise_id, reps, pause, weight]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });
    return { workout_exercise_id, reps, pause, weight };
  },
};
