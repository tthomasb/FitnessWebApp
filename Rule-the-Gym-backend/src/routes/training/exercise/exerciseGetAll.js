import { db } from "../../../database";
import * as admin from "firebase-admin";

export const exerciseGetAll = {
  method: "GET",
  path: "/api/exercises/{user_id}",
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const user_id = req.params.user_id;

    if (user.user_id !== user_id)
      throw Boom.unauthorized("Users can only access their own exercises!");
    const { results } = await db
      .query("SELECT * FROM exercise where user_id='1' or user_id=$1", [user_id])
      .catch((e) => {
        message.message = e;
        return message;
      });

    return results.rows;
  },
};
