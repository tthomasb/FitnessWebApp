import { db } from "../../../database";

export const exerciseEdit = {
  method: "PUT",
  path: "/api/exercise/id/{e_id}",
  handler: async (req, h) => {
    const { e_id } = req.params;
    const { exercisename, description, muscle, equipment } = req.payload;
    await db.query(
      `
              UPDATE exercise
                  SET exercisename=$1, description=$2, muscle=$3, equipment=$4
                  WHERE e_id=$5
          `,
      [exercisename, description, muscle, equipment, e_id]
    );
    const { results } = await db.query("SELECT * FROM exercise WHERE e_id=$1", [
      e_id,
    ]);
    return results.rows[0];
  },
};
