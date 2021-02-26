import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';


@Component({
  selector: 'app-forfaits-cuba',
  templateUrl: './forfaits-cuba.component.html',
  styleUrls: ['./forfaits-cuba.component.css']
})
export class ForfaitsCubaComponent implements OnInit {
  mesForfaits: Array<Forfait> ;
 

  contains(destination, pays) {
    if (destination.includes(pays))
    {
      return true;
    }
  }

  constructor(private forfaitsService: ForfaitsService) { }

  ngOnInit(): void {
    this.getForfaits();

  }

  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => {
          this.mesForfaits = resultat
        });

}

}
