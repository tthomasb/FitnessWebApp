import { db } from "../../../database";

export const workoutCreate = {
  method: "POST",
  path: "/api/workout",
  handler: async (req, h) => {
    const { workoutname = "", type = "" } = req.payload;
    const user_id = "1";

    await db
      .query(
        `
            INSERT INTO workout (workoutname, type, user_id)
              VALUES ($1, $2, $3);
        `,
        [workoutname, type, user_id]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });

    return { workoutname, type, user_id };
  },
};
