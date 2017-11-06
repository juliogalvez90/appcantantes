import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CuadroDeControlComponent }  from './cuadro-de-control.component';
import { CantantesComponent }        from './cantantes.component';
import { CantanteDetailComponent}    from './cantante-detail.component';

const rutas_parametrizadas: Routes = [
										{ path: 'cantantes'       , component: CantantesComponent }, 
	  				  					{ path: 'cuadrodecontrol' , component: CuadroDeControlComponent },
	  				  					{ path: ''                , redirectTo: '/cuadrodecontrol'  , pathMatch: 'full' }, 
  				  	  					{ path: 'detalle/:id'     , component: CantanteDetailComponent } 
									];


@NgModule({
  imports: [ RouterModule.forRoot(rutas_parametrizadas) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }