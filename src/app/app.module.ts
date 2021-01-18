import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TaskAddTimerComponent } from './task-add-timer/task-add-timer.component';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserDashboardComponent,
    TaskAddTimerComponent,
    TaskListsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
