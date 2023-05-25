import { db } from "../../../../database";

export const workoutExerciseAdd = {
  method: "POST",
  path: "/api/workout/exercise/add",
  handler: async (req, h) => {    
    const { workout_id, exercise_id } = req.payload; 
    //create workout_exercise   
    const {results} =await db.query(
      `
      INSERT INTO workout_exercise(exercise_id,workout_id,exercisepause)
      VALUES ($1, $2, 20) RETURNING *;
          `,[exercise_id,workout_id]
      
    ).catch((e)=>{
      return(e);
    });

  //create set
  await db.query(
    `
    INSERT INTO set(workout_exercise_id,reps,weight,pause)
    VALUES ($1, $2, $3, $4);
        `,[results.rows[0].workout_exercise_id,0,0,0]    
  ).catch((e)=>{
    console.log(e);
  });



    return results.rows[0];
  },
};
