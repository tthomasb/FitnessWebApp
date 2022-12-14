import { Component, OnInit } from '@angular/core';

export interface Tile {
  //color: string;
  cols: number;
  rows: number;
  text: string;
  picture: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  tiles: Tile[] = [
    { text: 'leer', cols: 4, rows: 1, picture: '' },
    { text: 'One', cols: 2, rows: 1, picture: '/assets/pictures/Trainingssitzungen.png' },
    { text: 'Two', cols: 2, rows: 1, picture: '/assets/pictures/Gesamtzeit.png' },
    { text: 'Three', cols: 2, rows: 1, picture: '/assets/pictures/Sitzungsdauer.png'  },
    { text: 'Four', cols: 2, rows: 1, picture: '/assets/pictures/Sätze.png'  },
    { text: 'Five', cols: 4, rows: 4, picture: '/assets/pictures/Muskeln.png'  },
    { text: 'leer', cols: 4, rows: 1, picture: '' },
  ];
}
