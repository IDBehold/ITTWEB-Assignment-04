import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkoutsComponent} from './workouts/workouts.component';
import {CreateWorkoutComponent} from './create-workout/create-workout.component';
import {CreateExerciseComponent} from './create-exercise/create-exercise.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', redirectTo: 'workouts', pathMatch: 'full'},
  {path: 'create-workout', component: CreateWorkoutComponent},
  {path: 'create-exercise', component: CreateExerciseComponent},
  {path: 'workouts', component: WorkoutsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
