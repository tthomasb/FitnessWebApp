import { db } from "../../../database";

export const workoutCreate = {
  method: "POST",
  path: "/api/workout",
  handler: async (req, h) => {
    const { workoutname = "", type = "", user_id=""} = req.payload;
    

    await db.query(
      `
            INSERT INTO workout (workoutname, type, user_id)
              VALUES ($1, $2, 1);
        `,
      [workoutname, type]
    );

    return { workoutname, type, user_id };
  },
};
