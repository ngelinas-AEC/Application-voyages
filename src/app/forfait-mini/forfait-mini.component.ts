import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {
  @Input() forfait: Forfait;
  constructor() { }

  ngOnInit(): void {
    let date1: Date = new Date(this.forfait.dateDepart); 
  }

  getUrl()
  {
    return "url('./assets/card.png')";
  }

  public duree(dateDeDepart: string, dateDeRetour:string): number {
    let date1: Date = new Date(dateDeDepart); 
    let date2: Date = new Date(dateDeRetour); 
    return (date2.valueOf() - date1.valueOf())/ (1000 * 3600 * 24);
  }

  private date(date: string):Date{
    return new Date(date);
  }
}
