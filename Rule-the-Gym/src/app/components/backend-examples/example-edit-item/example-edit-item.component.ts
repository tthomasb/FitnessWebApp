import { ExampleService } from '../../../services/example.service';
import { Example } from '../../../types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-example-edit-item',
  templateUrl: './example-edit-item.component.html',
  styleUrls: ['./example-edit-item.component.css'],
})
export class ExampleEditItemComponent implements OnInit {
  item!: Example;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exampleService: ExampleService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.exampleService.getItemById(id!).subscribe((item) => (this.item = item));
  }
  onSubmit({ name, description, price }: any): void {
    this.exampleService
      .editItem(this.item.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/example-user-items');
      });
  }
}
