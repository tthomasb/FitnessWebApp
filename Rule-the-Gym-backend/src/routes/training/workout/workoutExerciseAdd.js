import { db } from "../../../database";

export const workoutExerciseAdd = {
  method: "POST",
  path: "/api/workout/exercise/add",
  handler: async (req, h) => {
    const { workout_id, exercise_id } = req.payload;
    await db
      .query(
        `
      INSERT INTO workout_exercise(exercise_id,workout_id,pausetime)
      VALUES (${exercise_id}, ${workout_id}, 20);
          `
      )
      .catch((e) => {
        message.message = e;
        return message;
      });
    return { message: "Success" };
  },
};
