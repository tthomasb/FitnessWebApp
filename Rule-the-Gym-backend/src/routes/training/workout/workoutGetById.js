import Boom from "@hapi/boom";
import { db } from "../../../database";

export const workoutById = {
  method: "GET",
  path: "/api/workout/id/{w_id}",
  handler: async (req, h) => {
    const w_id = req.params.w_id;

    const { results } = await db.query(
      "SELECT * FROM workouts WHERE w_id = $1",
      [w_id]
    );
    const workout_table = results.rows[0];
    if (!workout_table)
      throw Boom.notFound(`Workout does not exist with id ${w_id}`);
    return workout_table;
  },
};
