import Boom from "@hapi/boom";
import { db } from "../../../database";

export const workoutExerciseGetHistorySets = {
  method: "GET",
  path: "/api/workout/exercise/set_history/{set_id}",
  handler: async (req, h) => {
    const set_id = req.params.set_id;

    const { results } = await db
      .query(
        "SELECT * FROM set_history where set_id=$1 order by record_time desc limit 1",
        [set_id]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });
    const history_sets_table = results.rows[0];
    if (!history_sets_table)
      throw Boom.notFound(`For set_id ${set_id} exists no history sets`);
    return history_sets_table;
  },
};
