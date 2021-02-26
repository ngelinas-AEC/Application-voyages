import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent implements OnInit {
  @Input() etoiles: number;
  @Input() color: string;
  faStar = faStar;

  constructor() {
   }

  ngOnInit(): void {
  }


}
