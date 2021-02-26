import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaitsCubaComponent } from './forfaits-cuba/forfaits-cuba.component';
import { ForfaitsCostaricaComponent } from './forfaits-costarica/forfaits-costarica.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent }, 
  { path: 'apropos', component: AproposComponent },
  { path: 'forfaitsCuba', component: ForfaitsCubaComponent },
  { path: 'forfaitsCostarica', component: ForfaitsCostaricaComponent },
  { path: 'admin/nouveauForfait', component: FormulaireForfaitComponent },
  { path: 'admin/editForfait/:id', component: FormulaireForfaitComponent },
  { path: 'admin', component: AdministrationComponent },
  { path: '', redirectTo:'/accueil', pathMatch:'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
