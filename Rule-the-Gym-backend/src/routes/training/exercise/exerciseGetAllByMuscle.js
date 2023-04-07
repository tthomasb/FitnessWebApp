import Boom from "@hapi/boom";
import { db } from "../../../database";

export const exerciseGetAllByMuscle = {
  method: "GET",
  path: "/api/exercise/muscle/{muscle}",
  handler: async (req, h) => {
    const muscle = req.params.muscle;

    const { results } = await db.query("SELECT * FROM exercise where muscle=$1", [
      muscle,
    ]);
    const exercise_table = results.rows;
    if (!exercise_table) throw Boom.notFound(`Exercise does not exist with muscle ${muscle}`);
    return exercise_table;
  },
};
