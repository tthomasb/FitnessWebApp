import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { createUrlTreeFromSnapshot } from '@angular/router';

interface WorkoutsNode {
  name: string;  
  children?: WorkoutNode[];
}
interface WorkoutNode {
  name: string;  
  children?: ExerciseNode[];
}
interface ExerciseNode {
  name: string;  
  children?: DataNode[];
}
interface DataNode {
  name: string;  
  pause:string;
}

const TREE_DATA: WorkoutsNode[] = [
  {
    name: 'Workouts',    
    children: [
      {
        name: 'Workout 1',        
        children: [{name: 'Exercise 1', 
                    children: [
                      {
                        name:"curls",
                        pause: "2min"
                      }
                    ]}],
      }      
    ],
  },
];
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  treeControl = new NestedTreeControl<WorkoutsNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<WorkoutsNode>();

  constructor() { 
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: WorkoutsNode) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
    
  }

}
