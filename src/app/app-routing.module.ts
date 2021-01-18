import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserActiveGuard} from './guards/user-active.guard';
import {UserAddComponent} from './user-add/user-add.component';



const routes: Routes = [
  { path: '', component: UserDashboardComponent, pathMatch: 'full', canActivate: [UserActiveGuard] },
  { path: 'user-add', component: UserAddComponent},
  // will be applicable to multiple users
  { path: 'u/:username', component: UserDashboardComponent, canActivate: [UserActiveGuard] },
  { path: '**', component: PageNotFoundComponent },  // 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
