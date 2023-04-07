import { db } from "../../../database";

export const exerciseCreate = {
  method: "POST",
  path: "/api/exercise",
  handler: async (req, h) => {
    const { exercisename = "", description = "", muscle = '', equipment='' } = req.payload;
    const user_id = "1";

    await db.query(
      `
            INSERT INTO exercise (exercisename, description, muscle, equipment, user_id)
              VALUES ($1, $2, $3, $4, $5);
        `,
      [exercisename, description, muscle, equipment, user_id]
    );
    
    return { exercisename, description, muscle, equipment, user_id };
  },
};