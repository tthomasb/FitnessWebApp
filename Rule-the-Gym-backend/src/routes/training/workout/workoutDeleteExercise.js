import { db } from "../../../database";

export const workoutDeleteExercise = {
  method: "Delete",
  path: "/api/wocomp/id/{wc_id}",
  handler: async (req, h) => {
    const { wc_id } = req.params;
    await db.query(
      `
      DELETE FROM wocomp WHERE wc_id=$1
          `,
      [wc_id]
    );
    return { message: "Success!" };
  },
};
