import * as admin from "firebase-admin";
import { db } from "../../../database";

export const exerciseCreate = {
  method: "POST",
  path: "/api/exercise",
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    console.log(token);
    const user = await admin.auth().verifyIdToken(token);
    const user_id = user.user_id;
    const {
      exercisename = "",
      description = "",
      muscle = "",
      equipment = "",
    } = req.payload;

    const { results } = await db
      .query(
        `
            INSERT INTO exercise (exercisename, description, muscle, equipment, user_id)
              VALUES ($1, $2, $3, $4, $5) RETURNING*;
        `,
        [exercisename, description, muscle, equipment, user_id]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });

    return results.rows[0];
  },
};
