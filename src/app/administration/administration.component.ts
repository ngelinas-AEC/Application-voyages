import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';

import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';
import { Reservation } from '../Reservation';
import { ReservationsService } from '../reservations.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit {
  columnsToDisplay = ['dateDepart', 'dateRetour', 'destination','nomHotel', 'prix', 'actions'];
  mesForfaits: Array<Forfait> ;
  
  reservations: Array<Reservation> ;

  labelsBar:  Array<string> =[] ;
  labelsPie:  Array<string> =[] ;
  
  dataBar: Array<number>=[];
  dataPie: Array<number>=[];

  venteTotal: Array<number>=[];
  nombrePassagers: Array<number>=[];
  prixMoyen: Array<number>=[];

  selectedForfait : Forfait;
  forfaitEdit: any;


  public barChartOptions: ChartOptions = {
    responsive: true,      
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [ ], label: 'Prix moyen ($)' }
  ];

  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: []
    },
  ];
  
  constructor(private forfaitsService: ForfaitsService, private reservationsService: ReservationsService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.getForfaits();
    this.getReservations();
  }

  getReservations(): void {
    this.reservationsService.getReservations()
        .subscribe(resultat => {
          this.reservations = resultat;
          this.getLabels();
          this.getValues();
          this.addValues();
        });
  }

  addValues () :void{
    for(let i=0; i<this.labelsBar.length; i++){
      this.barChartLabels.push(this.labelsBar[i]);
      this.barChartData[0].data.push(this.prixMoyen[i]);
    }
    for(let i=0; i<this.labelsPie.length; i++){
      this.pieChartLabels.push(this.labelsPie[i]);
      this.pieChartData.push(this.dataPie[i]);
      this.pieChartColors[0].backgroundColor.push(this.getRandomColor());
    }
  }

  getLabels () :void{
    this.reservations.map(reservation =>{
      if(!this.labelsBar.includes(reservation.destination)){
        this.labelsBar.push(reservation.destination);
      }
      if(!this.labelsPie.includes(reservation.destination)){
        this.labelsPie.push(reservation.destination);
      }
    });
  }

  getValues () :void{

    this.dataPie = new Array(this.labelsPie.length).fill(0);
    this.reservations.map(reservation =>{
      if(this.labelsPie.includes(reservation.destination))
      {
        let index= this.labelsPie.indexOf(reservation.destination);
        this.dataPie[index]++;
      }
    });

    this.venteTotal= new Array(this.labelsBar.length).fill(0);
    this.nombrePassagers= new Array(this.labelsBar.length).fill(0);
    this.prixMoyen= new Array(this.labelsBar.length).fill(0);

    this.reservations.map(reservation =>{
      if(this.labelsBar.includes(reservation.destination))
      {
        let index= this.labelsBar.indexOf(reservation.destination);
        this.venteTotal[index]+=reservation.prixTotal;
        this.nombrePassagers[index]+=reservation.nombrePassagers;
      }
    });

    for(let i=0; i<this.labelsBar.length;i++){
      this.prixMoyen[i]=Number((this.venteTotal[i]/this.nombrePassagers[i]).toFixed());
    }
  }

  getRandomColor()
  {
    var color = "#" + ((1<<24)*Math.random() | 0).toString(16)
    return color;
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait; 
  }

  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => {
          this.mesForfaits = resultat
        });

}

onDelete(forfait: Forfait): void {
  this.forfaitsService.deleteForfait(forfait._id)
      .subscribe(result => {
        this.mesForfaits = this.mesForfaits.filter(h => h !== forfait)
      });
 }

 
}
