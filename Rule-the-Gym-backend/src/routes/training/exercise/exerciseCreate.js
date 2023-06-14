import { db } from "../../../database";

export const exerciseCreate = {
  method: "POST",
  path: "/api/exercise/{user_id}",
  handler: async (req, h) => {
    const user_id = req.params.user_id;
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
