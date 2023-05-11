import { db } from "../../../database";

export const exerciseCreate = {
  method: "POST",
  path: "/api/exercise",
  handler: async (req, h) => {
    const {
      exercisename = "",
      description = "",
      muscle = "",
      equipment = "",
    } = req.payload;
    const user_id = "1";

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
