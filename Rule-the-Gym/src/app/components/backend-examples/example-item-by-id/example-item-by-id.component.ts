import { ExampleService } from '../../../services/example.service';
import { Example } from '../../../types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-item-by-id',
  templateUrl: './example-item-by-id.component.html',
  styleUrls: ['./example-item-by-id.component.css'],
})
export class ExampleItemByIdComponent implements OnInit {
  isLoading: boolean = true;
  item!: Example;

  constructor(
    private route: ActivatedRoute,
    private exampleService: ExampleService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.exampleService.getItemById(id!).subscribe((item: Example) => {
      this.item = item;
      this.isLoading = false;
    });
  }
}
