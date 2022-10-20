import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  pause:string
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Workouts',
    pause:'2min',
    children: [
      {
        name: 'Workout 1',
        pause:'2min',
        children: [{name: 'Exercise 1', pause:'2min'}, {name: 'Exercise 2',pause:'2min'}, {name: 'Exercise 3', pause:'2min'}],
      },
      {
        name: 'Workout 2',
        pause:'2min',
        children: [{name: 'Exercise 1',pause:'2min',}, {name: 'Exercise 2',pause:'2min',}, {name: 'Exercise 3',pause:'2min',}],
      },
    ],
  },
];
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() { 
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

}
