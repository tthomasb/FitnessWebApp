import { db } from "../../../database";

export const exerciseGetAll = {
  method: "GET",
  path: "/api/exercises/{user_id}",
  handler: async (req, h) => {
    const user_id = req.params.user_id;
    const { results } = await db
      .query("SELECT * FROM exercise where user_id='1' or user_id=$1", [user_id])
      .catch((e) => {
        message.message = e;
        return message;
      });

    return results.rows;
  },
};
