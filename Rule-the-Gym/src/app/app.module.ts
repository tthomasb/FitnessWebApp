import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from "./modules/material.module";
import { MatTreeModule } from '@angular/material/tree';
import { TrainingComponent } from './components/training/training.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { WorkoutComponent } from './components/training/workout/workout.component';
import { ExerciseComponent } from './components/training/exercise/exercise.component';
import { DialogWorkoutComponent } from './dialogues/dialog-workout/dialog-workout.component';
import { DialogExerciseComponent } from './dialogues/dialog-exercise/dialog-exercise.component';
import { DialogWorkoutAddExerciseComponent } from './dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import { DialogStartWorkoutComponent } from './dialogues/dialog-start-workout/dialog-start-workout.component';
import { DialogEditWorkoutComponent } from './dialogues/dialog-edit-workout/dialog-edit-workout.component';
import { DialogStartWorkoutTimeComponent } from './dialogues/dialog-start-workout/dialog-start-workout-time/dialog-start-workout-time.component';
import { AccordionComponent } from './components/utils/accordion/accordion.component';
import { DialogAskDeleteComponent } from './dialogues/dialog-ask-delete/dialog-ask-delete/dialog-ask-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    BmiComponent,
    DashboardComponent,
    NutritionComponent,
    WorkoutComponent,
    ExerciseComponent,
    DialogWorkoutComponent,
    DialogExerciseComponent,
    DialogWorkoutAddExerciseComponent,
    DialogStartWorkoutComponent,
    DialogEditWorkoutComponent,
    AccordionComponent,
    DialogEditWorkoutComponent,
    DialogStartWorkoutTimeComponent,
    DialogAskDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
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
