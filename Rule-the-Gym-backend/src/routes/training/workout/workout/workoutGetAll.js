import Boom from "@hapi/boom";
import * as admin from "firebase-admin";
import { db } from "../../../../database";

export const workoutGetAll = {
  method: "GET",
  path: "/api/workouts/{user_id}",
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const user_id = req.params.user_id;

    if (user.user_id !== user_id)
      throw Boom.unauthorized("Users can only access their own workout!");
    const { results } = await db
      .query("SELECT * FROM workout where user_id='1' or user_id=$1", [user_id])
      .catch((e) => {
        message.message = e;
        return message;
      });

    return results.rows;
  },
};
