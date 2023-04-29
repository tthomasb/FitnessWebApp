import { ExampleService } from '../../../services/example.service';
import { Example } from '../../../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-user-items',
  templateUrl: './example-user-items.component.html',
  styleUrls: ['./example-user-items.component.css'],
})
export class ExampleUserItemsComponent implements OnInit {
  example_table: Example[] = [];

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.exampleService
      .getItemsForUser()
      .subscribe((example_table) => (this.example_table = example_table));
  }
  onDeleteClicked(itemId: string): void {
    this.exampleService.deleteItem(itemId).subscribe(() => {
      this.example_table = this.example_table.filter((item) => item.id !== itemId);
    });
  }
}
