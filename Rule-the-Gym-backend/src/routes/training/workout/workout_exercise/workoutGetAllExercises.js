import { workout_exercise_adapter } from "../../../../workout_exercise_adapter";
import { db } from "../../../../database";

export const workoutGetAllExercise = {
  method: "GET",
  path: "/api/workout/exercise/{workout_id}",
  handler: async (req, h) => {
    const workout_id = req.params.workout_id;

    const { results } = await db
      .query(
        `select * from workout, exercise, workout_exercise 
          where workout.workout_id = workout_exercise.workout_id 
          AND exercise.exercise_id = workout_exercise.exercise_id 
          AND workout.workout_id=$1`,
        [workout_id]
      )
      .catch((e) => {
        console.log(e);
      });
    const rows = await results.rows;
    let list=[];
    for(let row of rows)
    {                  
      let obj=new workout_exercise_adapter(
        row.workout_exercise_id,
        row.workout_id,
        row.exercise_id,
        row.exercisepause,
        row.exercisename,
        row.description,
        row.equipment,
        row.muscle,
        row.user_id
      )
      
      list.push(obj)
    }    
    return list;
  },
};
