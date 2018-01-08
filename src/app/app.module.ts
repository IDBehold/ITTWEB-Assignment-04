import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from "./authentication/authentication.service";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    CreateWorkoutComponent,
    CreateExerciseComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    WorkoutsService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
