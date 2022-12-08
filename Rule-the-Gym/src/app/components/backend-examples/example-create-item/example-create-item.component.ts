import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-example-create-item',
  templateUrl: './example-create-item.component.html',
  styleUrls: ['./example-create-item.component.css']
})
export class ExampleCreateItemComponent implements OnInit {

  constructor(private router: Router, private exampleService: ExampleService) {}

  ngOnInit() {}
  onSubmit({ name, description, price }: any): void {
    this.exampleService
      .createItem(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/example-user-items');
      });
  }

}
