import { db } from "../../../database";

export const exerciseCreate = {
  method: "POST",
  path: "/api/exercise/id",
  handler: async (req, h) => {
    const { exercisename = "", description = "", muscle = '', equipment='' } = req.payload;

    await db.query(
      `
            INSERT INTO exercise (exercisename, description, muscle, equipment)
              VALUES ($1, $2, $3, $4);
        `,
      [exercisename, description, muscle, equipment]
    );
    
    return { exercisename, description, muscle, equipment };
  },
};