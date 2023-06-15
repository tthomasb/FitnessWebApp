import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  picture: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
  // Images
  tiles: Tile[] = [
    { text: 'leer', cols: 4, rows: 1, picture: '' },
    { text: 'One', cols: 4, rows: 1, picture: '/assets/pictures/Trainingssitzungen.png' },
    { text: 'Two', cols: 4, rows: 1, picture: '/assets/pictures/Gesamtzeit.png' },
    { text: 'Three', cols: 4, rows: 1, picture: '/assets/pictures/Sitzungsdauer.png'  },
    { text: 'Four', cols: 4, rows: 1, picture: '/assets/pictures/Sätze.png'  },
    { text: 'Five', cols: 4, rows: 3, picture: '/assets/pictures/Muskeln.png'  },
  ];
}
