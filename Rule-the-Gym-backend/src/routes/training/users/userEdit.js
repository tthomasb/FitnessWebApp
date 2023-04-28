import { db } from "../../../database";

export const userEdit = {
  method: "PUT",
  path: "/api/user/{user_id}",
  handler: async (req, h) => {
    const { user_id } = req.params;
    const { username, weight, height, birthdate } = req.payload;
    await db
      .query(
        `
              UPDATE users
                  SET username=$1, weight=$2, height=$3, birthdate=$4
                  WHERE user_id=$5
          `,
        [username, weight, height, birthdate, user_id]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });
    const { results } = await db.query("SELECT * FROM users WHERE user_id=$1", [
      user_id,
    ]);
    return results.rows[0];
  },
};
