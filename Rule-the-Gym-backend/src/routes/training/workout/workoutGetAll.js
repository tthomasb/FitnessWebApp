import { db } from "../../../database";


export const workoutGetAll = {
  method: "GET",
  path: "/api/workout/allworkouts",
  handler: async (req,h) => {
    // console.log("test");
    // //const type = req.params.type;
    // workoutList;
    // exerxiseWorkoutMap=new Map();
    const { workoutprom } = await db.query("SELECT * FROM workout;");    
    // workouts.then((data)=>{
    //     return data;
    // })
    // workouts.forEach((workout)=>{
    //     let workoutExersises=getWorkoutExerciseByWorkoutID(workout.workout_id);
    //     workoutExercises.forEach((workoutExercise)=>{
    //         let sets=getSetsByWorkoutExerciseId(workoutExercise.workoutexercise_id);
    //         sets.then((data)=>{
    //             this.exerxiseWorkoutMap.add(workoutexercise.workout_id, data)
    //         });
    //     })
    //     this.workoutList.add(
    //         new Workout_model(
    //             workout.workout_id,
    //             workout.name,
    //              workout.type,
    //              workout.user_id,
    //              exerxiseWorkoutMap
    //              ));
    //     workoutList.clear();
    // });
    

    // const { workout_Exercise } = await db.query(
    //   "SELECT * from workout_exercise"
    // );
    // const { exerise } = await db.query("SELECT * from exercise");
    // const { sets } = await db.query("SELECT * from workout_exercise");
    
    // if (!workout_table)
    //   throw Boom.notFound(`Workout does not exist with type ${type}`);
    //return workouts;
    return workoutprom.rows;
  },
};

// export async function getWorkoutExerciseByWorkoutID(workout_id) {
//   return await db.query("SELECT * from workout_exercise WHERE workout_id= $1", [
//     workout_id,
//   ]);
// }

// export async function getSetsByWorkoutExerciseId(workoutExercise_id) {
//   return await db.query("SELECT * from sets WHERE workout_exercise_id= $1", [
//     workoutExercise_id,
//   ]);
// }

// export async function getSetHistoryBySetId(Set_id) {
//   return await db.query("SELECT * from set_history WHERE set_id= $1", [Set_id]);
// }
