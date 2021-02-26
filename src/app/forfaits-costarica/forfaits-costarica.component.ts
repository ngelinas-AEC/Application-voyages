import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-forfaits-costarica',
  templateUrl: './forfaits-costarica.component.html',
  styleUrls: ['./forfaits-costarica.component.css']
})
export class ForfaitsCostaricaComponent implements OnInit {
  mesForfaits: Array<Forfait> ;
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
