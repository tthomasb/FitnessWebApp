import Boom from "@hapi/boom";
import { db } from "../../../database";

export const userById = {
  method: "GET",
  path: "/api/user/{user_id}",
  handler: async (req, h) => {
    const user_id = req.params.user_id;

    const { results } = await db
      .query("SELECT * FROM users WHERE user_id = $1", [user_id])
      .catch((e) => {
        message.message = e;
        return message;
      });
    const user_table = results.rows[0];
    if (!user_table)
      throw Boom.notFound(`User does not exist with id ${user_id}`);
    return user_table;
  },
};
