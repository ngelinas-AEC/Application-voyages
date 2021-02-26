import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Forfait } from './forfait';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ForfaitsService {
  forfaitsUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';
  
  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl+'da/1996407');  
  }

 

  getForfait(id: string ): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl+id);  
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    console.log(forfait);
    return this.http.post<Forfait>(this.forfaitsUrl, forfait, httpOptions);
  }

  /** PUT: mise à jour du forfait */
  updateForfait(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait>(this.forfaitsUrl +  id, forfait, httpOptions);
  }

   /** DELETE: suppression du forfait */
   deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl + id, httpOptions);
  }

}
