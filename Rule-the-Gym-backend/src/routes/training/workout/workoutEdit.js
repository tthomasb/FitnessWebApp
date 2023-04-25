import { db } from "../../../database";

export const workoutEdit = {
  method: "PUT",
  path: "/api/workout/{workout_id}",
  handler: async (req, h) => {
    const { workout_id } = req.params;
    const { workoutname, type, description } = req.payload;
    await db
      .query(
        `
              UPDATE workout
                  SET workoutname=$1, type=$2, description=$3
                  WHERE workout_id=$4
          `,
        [workoutname, type, description, workout_id ]
      )
      .catch((e) => {
        console.log(e);        
      });
    const { results } = await db.query(
      "SELECT * FROM workout WHERE workout_id=$1",
      [workout_id]
    ).catch((e)=>{
      console.log(e);
    });
    return results.rows[0];
  },
};
