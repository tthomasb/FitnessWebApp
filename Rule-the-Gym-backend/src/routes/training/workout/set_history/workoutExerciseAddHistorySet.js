import { db } from "../../../../database";

export const workoutExerciseAddHistorySet = {
  method: "POST",
  path: "/api/workout/exercise/set_history/{set_id}",
  handler: async (req, h) => {
    const { set_id } = req.params;
    const { reps, weight } = req.payload;
    const record_time = new Date();
    await db
      .query(
        `
      INSERT INTO set_history (set_id, reps, weight, record_time)
      VALUES ($1, $2, $3, $4);
          `,
        [set_id, reps, weight, record_time]
      )
      .catch((e) => {
        return e;
      });
    return { set_id, reps, weight, record_time };
  },
};
