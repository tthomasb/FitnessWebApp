import { db } from "../../../database";

export const exerciseEdit = {
  method: "PUT",
  path: "/api/exercise/{exercise_id}",
  handler: async (req, h) => {
    const { exercise_id: exercise_id } = req.params;
    const { exercisename, description, muscle, equipment } = req.payload;
    await db
      .query(
        `
              UPDATE exercise
                  SET exercisename=$1, description=$2, muscle=$3, equipment=$4
                  WHERE exercise_id=$5
          `,
        [exercisename, description, muscle, equipment, exercise_id]
      )
      .catch((e) => {
        message.message = e;
        return message;
      });
    const { results } = await db.query(
      "SELECT * FROM exercise WHERE exercise_id=$1",
      [exercise_id]
    );
    return results.rows[0];
  },
};
