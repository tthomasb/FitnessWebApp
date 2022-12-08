import { db } from "../../../database";

export const workoutEdit = {
  method: "PUT",
  path: "/api/workout/id/{w_id}",
  handler: async (req, h) => {
    const { w_id } = req.params;
    const { workoutname, type } = req.payload;
    await db.query(
      `
              UPDATE workouts
                  SET workoutname=$1, type=$2
                  WHERE w_id=$3
          `,
      [workoutname, type, w_id]
    );
    const { results } = await db.query("SELECT * FROM workouts WHERE w_id=$1", [
      w_id,
    ]);
    return results.rows[0];
  },
};
