export class set_history_model{
    set_history_id;
    set_id;
    weight;
    reps;
    recordTime;

    constructor(set_history_id, set_id,weight,reps,recordTime){
        this.set_history_id=set_history_id;
        this.set_id=set_id;
        this.weight=weight;
        this.reps=reps;
        this.recordTime=recordTime;
    }
}