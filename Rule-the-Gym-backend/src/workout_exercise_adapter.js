export class workout_exercise_adapter {

    constructor(
        workout_exercise_id,
        workout_id,
        exercise_id,
        exercisepause,
        exercisename,
        description,
        equipment,
        muscle,
        user_id,
    ){
        this.workout_id=workout_id;
        this.workout_exercise_id=workout_exercise_id;
        this.exercise_id=exercise_id;
        this.exercisepause=exercisepause;
        this.exercisename=exercisename;
        this.description=description;
        this.equipment=equipment;
        this.muscle=muscle;
        this.user_id=user_id;
    }
}