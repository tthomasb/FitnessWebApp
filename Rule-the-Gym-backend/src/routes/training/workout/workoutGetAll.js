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
    return results.rows;
  },
};
