import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Reservation } from './Reservation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ReservationsService {
  reservationsUrl = 'https://forfaits-voyages.herokuapp.com/api/reservations';

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl);  
  }
}
