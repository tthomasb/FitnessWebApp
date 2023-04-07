import { db } from "../../../database";

export const workoutExerciseDeleteSet = {
  method: "Delete",
  path: "/api/workout/exercise/set/{set_id}",
  handler: async (req, h) => {
    const { set_id } = req.params;
    await db.query(
      `
      DELETE FROM set WHERE set_id=$1
          `,
      [set_id]
    );
    return { message: "Success!" };
  },
};