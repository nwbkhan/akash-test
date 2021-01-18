import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TaskAddTimerComponent } from './task-add-timer/task-add-timer.component';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faArrowLeft, faCalendarAlt, faCheck, faClock, faListUl, faTh, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {NgxMaskModule} from 'ngx-mask';
import {NgDatepickerModule} from 'ng2-datepicker';


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
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    NgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(faTh, faListUl, faWindowClose, faCalendarAlt, faClock, faArrowLeft, faCheck);
  }
}
