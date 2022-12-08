import { db } from "../../../database";

export const workoutAddExercise = {
  method: "POST",
  path: "/api/wocomp/id/{w_id}",
  handler: async (req, h) => {
    const { w_id } = req.params;
    const { e_id } = req.payload;
    await db.query(
      `
      INSERT INTO wocomp (w_id, e_id)
      VALUES ($1, $2);
          `,
      [w_id, e_id]
    );
    const { results } = await db.query("SELECT * FROM wocomp WHERE w_id=$1", [
      w_id,
    ]);
    return results.rows[0];
  },
};
