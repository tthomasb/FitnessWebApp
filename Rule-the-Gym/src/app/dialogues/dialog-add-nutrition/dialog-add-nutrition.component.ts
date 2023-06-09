import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  kcal: string;
  food: string;
}

/** Constants used to fill up our data base. */
const food: string[] = [
  'Milk',
  'Egg',
  'Bread',
  'Rice',
  'Pasta',
  'Chicken',
  'Beef',
  'Pork',
  'Fish',
  'Cheese',
  'Yogurt',
  'Butter',
  'Oil',
  'Cake',
  'Biscuit',
  'Chocolate',
  'Protein bar',
  'Protein shake',
  'Protein powder',
  'BCAA',
];
const kcal: string[] = [
  '64 kcal',
  '78 kcal',
  '354 kcal',
  '130 kcal',
  '323 kcal',
  '121 kcal',
  '259 kcal',
  '169 kcal',
  '200 kcal',
];

@Component({
  templateUrl: './dialog-add-nutrition.component.html',
  styleUrls: ['./dialog-add-nutrition.component.scss']
})
export class DialogAddNutritionComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'kcal', 'food'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  return {
    id: id.toString(),
    kcal: kcal[Math.round(Math.random() * (kcal.length - 1))],
    food: food[Math.round(Math.random() * (food.length - 1))],
  };
}


