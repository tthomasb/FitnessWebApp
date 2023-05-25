import Boom from "@hapi/boom";
import { db } from "../../../../database";

export const workoutExerciseGetSets = {
  method: "GET",
  path: "/api/workout/exercise/set/{workout_exercise_id}",
  handler: async (req, h) => {
    const workout_exercise_id = req.params.workout_exercise_id;

    const { results } = await db
      .query("SELECT * FROM set where workout_exercise_id=$1", [
        workout_exercise_id,
      ])
      .catch((e) => {
        message.message = e;
        return message;
      });
    const sets_table = results.rows;
    if (!sets_table)
      throw Boom.notFound(`For ${workout_exercise_id} exists no sets`);
    return sets_table;
  },
};
