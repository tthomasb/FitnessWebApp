import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MaterialModule} from "./modules/material.module";
import { MatTreeModule } from '@angular/material/tree';
import { TrainingComponent } from './components/training/training.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    BmiComponent,
    DashboardComponent,
    NutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
