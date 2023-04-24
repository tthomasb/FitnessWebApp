import { db } from "../../../database";

export const workoutExerciseDelete = {
  method: "Delete",
  path: "/api/workout/exercise/delete/{workout_exercise_id}",
  handler: async (req, h) => {
    const { workout_exercise_id } = req.params;
    //Delete workout_exercise
    await db.query(
      `
      DELETE FROM workout_exercise WHERE workout_exercise_id=$1
          `,
      [workout_exercise_id]
    ).catch((e)=>{
        return e;
    });
//Delete Set_history
await db.query(
  `
  DELETE FROM workout_exercise WHERE workout_exercise_id=$1
      `,
  [workout_exercise_id]
).catch((e)=>{
    return e;
});

    //Delete set
    await db.query(
      `DELETE * FROM set WHERE workout_exercise_id=$1`, [workout_exercise_id]
    ).catch((e)=>{
      return e;
    });
    return { message: "Success!" };
  },
};