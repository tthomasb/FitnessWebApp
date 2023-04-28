import { db } from "../../../database";

export const workoutExerciseDelete = {
  method: "Delete",
  path: "/api/workout/exercise/delete/{workout_exercise_id}",
  handler: async (req, h) => {
    const { workout_exercise_id } = req.params;

    //Delete Set_history
    await db
      .query(
        `
      DELETE FROM set_history WHERE set_id=(select set_id from set where workout_exercise_id=$1);
      `,
        [workout_exercise_id]
      )
      .catch((e) => {
        return e;
      });

    //Delete set
    await db
      .query(`DELETE FROM set WHERE workout_exercise_id=$1`, [
        workout_exercise_id,
      ])
      .catch((e) => {
        return e;
      });

    //Delete workout_exercise
    await db
      .query(
        `
      DELETE FROM workout_exercise WHERE workout_exercise_id=$1
          `,
        [workout_exercise_id]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });

    return { message: "Success!" };
  },
};
