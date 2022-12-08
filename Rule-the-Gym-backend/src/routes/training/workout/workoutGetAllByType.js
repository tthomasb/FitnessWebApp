import Boom from "@hapi/boom";
import { db } from "../../../database";

export const workoutGetAllByType = {
  method: "GET",
  path: "/api/workout/type/{type}",
  handler: async (req, h) => {
    const type = req.params.type;

    const { results } = await db.query("SELECT * FROM workouts where type=$1", [
      type,
    ]);
    const workouts_table = results.rows[0];
    if (!workouts_table) throw Boom.notFound(`Workout does not exist with type ${type}`);
    return workouts_table;
  },
};
