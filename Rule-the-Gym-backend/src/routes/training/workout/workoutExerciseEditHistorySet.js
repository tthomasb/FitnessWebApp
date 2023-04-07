import { db } from "../../../database";

export const workoutExerciseEditHistorySet = {
  method: "PUT",
  path: "/api/workout/exercise/set_history/{set_history_id}",
  handler: async (req, h) => {
    const { set_history_id } = req.params;
    const { reps, weight } = req.payload;
    const recorded_time = new Date();
    await db.query(
      `
              UPDATE set_history
                  SET reps = $1, weight = $2, recorded_time = $3
                  WHERE set_history_id = $4
          `,
      [reps, weight, recorded_time, set_history_id]
    );
    const { results } = await db.query("SELECT * FROM set_history WHERE set_history_id=$1", [
      set_history_id,
    ]);
    return results.rows[0];
  },
};