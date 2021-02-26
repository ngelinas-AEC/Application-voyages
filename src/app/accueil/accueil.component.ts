import { Component, Input, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  mesForfaits: Array<Forfait>;
  constructor(private forfaitsService: ForfaitsService) { }

  @Input() recherche: Recherche={
    dateDepart : null,
    duree: null,
    nbEtoiles: null };

    @Input() closeDrawer: boolean;

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => {
          this.mesForfaits = resultat
        });
  }
  getUrl()
  {
    return "url('./assets/imageplage.jpg')";
  }
}
