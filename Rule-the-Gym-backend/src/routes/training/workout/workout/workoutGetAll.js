import { db } from "../../../../database";

export const workoutGetAll = {
  method: "GET",
  path: "/api/workouts/{user_id}",
  handler: async (req, h) => {
    const user_id = req.params.user_id;

    const { results } = await db
      .query("SELECT * FROM workout where user_id='1' or user_id=$1", [user_id])
      .catch((e) => {
        message.message = e;
        return message;
      });

    return results.rows;
  },
};
