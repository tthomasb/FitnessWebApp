import Boom from "@hapi/boom";
import { db } from "../../../database";

export const exerciseById = {
  method: "GET",
  path: "/api/exercise/id/{e_id}",
  handler: async (req, h) => {
    const e_id = req.params.e_id;

    const { results } = await db.query("SELECT * FROM exercise WHERE e_id = $1", [
      e_id,
    ]);
    const exercise_table = results.rows[0];
    if (!exercise_table) throw Boom.notFound(`Exercise does not exist with id ${e_id}`);
    return exercise_table;
  },
};