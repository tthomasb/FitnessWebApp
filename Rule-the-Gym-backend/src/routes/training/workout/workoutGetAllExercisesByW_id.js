import Boom from "@hapi/boom";
import { db } from "../../../database";

export const workoutGetAllExerciseByW_id = {
  method: "GET",
  path: "/api/workout/byid/{w_id}",
  handler: async (req, h) => {
    const w_id = req.params.w_id;

    const { results } = await db.query(
      "select * from workouts,exercise, wocomp where workouts.w_id = wocomp.w_id AND exercise.e_id = wocomp.e_id AND workouts.w_id=$1",
      [w_id]
    );
    return results.rows;
     
  },
};
