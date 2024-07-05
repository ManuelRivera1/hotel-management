import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { HotelReservationComponent } from './hotel-reservation/hotel-reservation.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels/:id', component: HotelDetailComponent },
  { path: 'hotel-management', component: HotelManagementComponent },
  { path: 'reservations', component: HotelReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
