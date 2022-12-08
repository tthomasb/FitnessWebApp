import { Example } from '../../../types';
import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-example-all-items',
  templateUrl: './example-all-items.component.html',
  styleUrls: ['./example-all-items.component.css'],
})
export class ExampleAllItemsComponent implements OnInit {
  example_table: Example[] = [];

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.exampleService
      .getAllItems()
      .subscribe((example_table) => (this.example_table = example_table));
  }
}
