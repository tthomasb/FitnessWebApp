import { db } from "../../../database";

export const workoutAddExercise = {
  method: "POST",
  path: "/api/workout/{workout_id}",
  handler: async (req, h) => {
    const { workout_id } = req.params;
    const { exercise_id, exercisepause } = req.payload;
    await db
      .query(
        `
      INSERT INTO workout_exercise (workout_id, exercise_id, exercisepause)
      VALUES ($1, $2, $3);
          `,
        [workout_id, exercise_id, exercisepause]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });
    return { workout_id, exercise_id, exercisepause };
  },
};
