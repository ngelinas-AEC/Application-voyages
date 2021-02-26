import { Component, Input, OnInit } from '@angular/core';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

import { Forfait } from '../forfait';



@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})



export class ForfaitCompletComponent implements OnInit {
  @Input() forfait: Forfait;
  faPlaneDeparture = faPlaneDeparture;
  faPlaneArrival = faPlaneArrival;
  constructor() { }

  ngOnInit(): void {
        //console.log('Forfait:', this.forfait );
  }

  public duree(dateDeDepart: string, dateDeRetour:string): number {
    let date1: Date = new Date(dateDeDepart); 
    let date2: Date = new Date(dateDeRetour); 
    var difference = date2.getTime() - date1.getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24));

    return days;
  }
}
