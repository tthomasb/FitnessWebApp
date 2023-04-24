import { db } from "../../../database";

export const workoutExerciseAdd = {
  method: "POST",
  path: "/api/workout/exercise/add",
  handler: async (req, h) => {    
    const { workout_id, exercise_id } = req.payload;    
    await db.query(
      `
      INSERT INTO workout_exercise(exercise_id,workout_id,exercisepause)
      VALUES ($1, $2, 20);
          `,[exercise_id,workout_id]
      
    ).catch((e)=>{
      return(e);
    });
    return {message:"Success"};
  },
};
