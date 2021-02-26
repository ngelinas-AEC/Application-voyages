import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Caracteristique } from '../caracteristique';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {
  constructor() { }
  @Input() direction: string;
  @Input() caract:  Array<Caracteristique>;
  @Output() caractChange = new EventEmitter();
  @Input() caracteristiquesEdit : Array<string>; 

  change(nouvelleValeur) {
    this.caractChange.emit(this.caracteristiques);
  }

  caracteristiques: Array<Caracteristique> = [
    { name: 'Face à la plage',  selected: false, id: 1 },
    { name: "Dans un lieu situé à proximité d'un parc/lieu naturel",  selected: false, id: 2 },
    { name: 'Ascenseur',  selected: false, id: 3 },
    { name: 'Miniclub',  selected: false, id: 4 },
    { name: 'Mariages',  selected: false, id: 5 },
    { name: 'Plage ',  selected: false, id: 6 },
    { name: 'Parque aquiatique',  selected: false, id: 7 },
    { name: "Salle d'exercice",  selected: false, id: 8 },
    { name: 'Collations 24 h',  selected: false, id: 9 },
    { name: 'Wi-Fi : dans tout le complexe',  selected: false, id: 10 },
    { name: 'Coffret de sûreté',  selected: false, id: 11},
    { name: 'Spa ($)',  selected: false, id: 12},
    { name: "Près d'un lieu culturel",  selected: false, id: 13},
  ]


 

  ngOnInit(): void {
    

    if (this.caracteristiquesEdit!==undefined){
      this.caracteristiques.map( item => {
        if(this.caracteristiquesEdit.includes(item.name)){
          item.selected=true;
        }
      })}
  }

  



}
