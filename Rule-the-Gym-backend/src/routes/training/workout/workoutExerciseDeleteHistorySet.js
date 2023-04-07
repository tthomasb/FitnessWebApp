import { db } from "../../../database";

export const workoutExerciseDeleteHistorySet = {
  method: "Delete",
  path: "/api/workout/exercise/set_history/{set_history_id}",
  handler: async (req, h) => {
    const { set_history_id } = req.params;
    await db.query(
      `
      DELETE FROM set_history WHERE set_history_id=$1
          `,
      [set_history_id]
    );
    return { message: "Success!" };
  },
};