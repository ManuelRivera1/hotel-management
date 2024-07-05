import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { HotelService } from '../services/hotel.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  currentUser: any;

  logout() {
    this.authService.logout();
  }
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService,private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(
      (data: Hotel[]) => {
        this.hotels = data;
      },
      (error) => {
        console.error('Error fetching hotels', error);
      }
    );
  }
}
