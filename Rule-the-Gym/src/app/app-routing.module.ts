import { ExampleItemByIdComponent } from './components/backend-examples/example-item-by-id/example-item-by-id.component';
import { ExampleEditItemComponent } from './components/backend-examples/example-edit-item/example-edit-item.component';
import { ExampleCreateItemComponent } from './components/backend-examples/example-create-item/example-create-item.component';
import { ExampleUserItemsComponent } from './components/backend-examples/example-user-items/example-user-items.component';
import { ExampleAllItemsComponent } from './components/backend-examples/example-all-items/example-all-items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { TrainingComponent } from './components/training/training.component';

// Routing between the components tabs
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bmi', component: BmiComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'training', component: TrainingComponent },
  { path: '**', redirectTo: 'dashboard' },
  { path: 'example-user-items', component: ExampleUserItemsComponent },
  { path: 'example-create', component: ExampleCreateItemComponent },
  { path: 'example-edit/:id', component: ExampleEditItemComponent },
  { path: 'example-all', component: ExampleAllItemsComponent },
  { path: 'example-all/:id', component: ExampleItemByIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
