export class Sets {
    reps:number[];
    pause:number[];
    weight?:number[];
    exercisepause:number;
    sets_Id?:string;

    constructor(reps:number[],
                pause:number[],
                exercisepause:number,
                weight?:number[]
                )
        {
            this.reps=reps;
            this.pause=pause;
            this.exercisepause=exercisepause;
            this.weight=weight;
        }
}
