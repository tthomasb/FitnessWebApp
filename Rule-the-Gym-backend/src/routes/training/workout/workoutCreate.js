import { db } from "../../../database";

export const workoutCreate = {
  method: "POST",
  path: "/api/workout/id",
  handler: async (req, h) => {
    const { workoutname = "", type = "" } = req.payload;

    await db.query(
      `
            INSERT INTO workouts (workoutname, type)
              VALUES ($1, $2);
        `,
      [workoutname, type]
    );

    return { workoutname, type };
  },
};
