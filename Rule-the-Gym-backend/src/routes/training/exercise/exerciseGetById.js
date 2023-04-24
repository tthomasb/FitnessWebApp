import Boom from "@hapi/boom";
import { db } from "../../../database";

export const exerciseById = {
  method: "GET",
  path: "/api/exercise/{exercise_id}",
  handler: async (req, h) => {
    const exercise_id = req.params.exercise_id;

    const { results } = await db
      .query("SELECT * FROM exercise WHERE exercise_id = $1", [exercise_id])
      .catch((e) => {
        message.message = e;
        return message;
      });
    const exercise_table = results.rows[0];
    if (!exercise_table)
      throw Boom.notFound(`Exercise does not exist with id ${exercise_id}`);
    return exercise_table;
  },
};
