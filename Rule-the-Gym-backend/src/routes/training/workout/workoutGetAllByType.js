import Boom from "@hapi/boom";
import { db } from "../../../database";

export const workoutGetAllByType = {
  method: "GET",
  path: "/api/workout/type/{type}",
  handler: async (req, h) => {
    const type = req.params.type;

    const { results } = await db.query("SELECT * FROM workout where type=$1", [
      type,
    ]);
    const exercise_table = results.rows;
    if (!exercise_table) throw Boom.notFound(`Exercise does not exist with type ${type}`);
    return exercise_table;
  },
};
