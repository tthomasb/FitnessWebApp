import Boom from "@hapi/boom";
import { db } from "../../../database";

export const workoutGetAll = {
  method: "GET",
  path: "/api/workout/type",
  handler: async (req, h) => {
    const type = req.params.type;

    const { results } = await db
      .query("SELECT * FROM workout")
      .catch((e) => {
        console.log(e);
      });
    const workout_table = results.rows;
    if (!workout_table)
      throw Boom.notFound(`Workout does not exist with type ${type}`);
    return workout_table;
  },
};
