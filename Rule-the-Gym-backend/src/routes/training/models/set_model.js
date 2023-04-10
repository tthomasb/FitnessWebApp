export class set_model{
    WorkoutExercise_id;
    weight;
    reps;
    Pause;
    set_id;

    constructor(we_id,set_id,weight,reps,pause){
        this.WorkoutExercise_id=we_id;
        this.weight=weight;
        this.reps=reps;
        this.pause=pause;
        this.set_id=set_id;
    }
}