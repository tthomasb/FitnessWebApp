import { db } from "../../../../database";

export const workoutExerciseEditSet = {
  method: "PUT",
  path: "/api/workout/exercise/set/{set_id}",
  handler: async (req, h) => {
    const { set_id } = req.params;
    const { reps, pause, weight } = req.payload;  
     
    await db.query(
      `
              UPDATE set
                  SET reps = $1, pause = $2, weight = $3
                  WHERE set_id = $4
          `,
      [reps, pause, weight, set_id]
    );
    const { results } = await db
      .query("SELECT * FROM set WHERE set_id=$1", [set_id])
      .catch((e) => {
        //console.log(e);
      });
      
    return {message:"success"};
  },
};
