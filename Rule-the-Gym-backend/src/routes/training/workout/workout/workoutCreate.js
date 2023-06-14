import { db } from "../../../../database";

export const workoutCreate = {
  method: "POST",
  path: "/api/workout/add/{user_id}",
  handler: async (req, h) => {
    const { workoutname = "", type = "", description=""} = req.payload;
    const user_id = req.params.user_id;
    //console.log(test);
    const {results}=await db
      .query(
        `
            INSERT INTO workout (workoutname, type, description, user_id)
              VALUES ($1, $2, $3, $4) RETURNING workout_id;
        `,
        [workoutname, type , description, user_id]
      )
      .catch((e) => {
        console.log(e);
        
        return e;
      });
      console.log(results.rows[0].workout_id, workoutname, type, description, user_id);
    return {workout_id:results.rows[0].workout_id, workoutname, type, description, user_id };
  },
};


