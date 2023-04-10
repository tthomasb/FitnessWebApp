export class Workout_model{
    workout_id;
    name;
    type;
    user_id;
    //exercise_id to sets
    exercisedata=new Map();

    constructor(workut_id,name,type,user_id, map){
        this.workout_id=workut_id;
        this.name=name;
        this.type=type;
        this.user_id=user_id;
        this.Map=map;
    }
}



