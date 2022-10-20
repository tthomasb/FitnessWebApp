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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }