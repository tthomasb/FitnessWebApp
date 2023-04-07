import { db } from "../../../database";

export const workoutEdit = {
  method: "PUT",
  path: "/api/workout/{workout_id}",
  handler: async (req, h) => {
    const { workout_id } = req.params;
    const { workoutname, type } = req.payload;
    await db.query(
      `
              UPDATE workout
                  SET workoutname=$1, type=$2
                  WHERE workout_id=$3
          `,
      [workoutname, type, workout_id]
    );
    const { results } = await db.query("SELECT * FROM workout WHERE workout_id=$1", [
      workout_id,
    ]);
    return results.rows[0];
  },
};
