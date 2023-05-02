import { db } from "../../../database";

export const workoutGetTime = {
  method: "PUT",
  path: "/api/workout/exercise/workout_exercise/{exercisepause}",
  handler: async (req, h) => {
    // const { workout_id } = req.params;
    // const { workoutname, type, description } = req.payload;
    // await db
    //   .query(
    //     `
    //           UPDATE workout_exercise
    //             SET exercisepause = $1
    //             WHERE workout_exercise_id=$2
    //     `,
    //     [workoutname, type, description, workout_id ]
    //   )
    //   .catch((e) => {
    //     console.log(e);        
    //   });
    // const { results } = await db.query(
    //   "SELECT * FROM workout WHERE workout_id=$1",
    //   [workout_id]
    // ).catch((e)=>{
    //   console.log(e);
    // });
    // return results.rows[0];
  },
};
