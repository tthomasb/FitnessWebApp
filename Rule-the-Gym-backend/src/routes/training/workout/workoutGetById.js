import Boom from "@hapi/boom";
import { db } from "../../../database";

export const workoutGetById = {
  method: "GET",
  path: "/api/workout/{workout_id}",
  handler: async (req, h) => {
    const workout_id = req.params.workout_id;

    const { results } = await db
      .query("SELECT * FROM workout WHERE workout_id = $1", [workout_id])
      .catch((e) => {
        message.message = e;
        return message;
      });
    const workout_table = results.rows[0];
    return workout_table;
  },
};
