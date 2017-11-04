import { Component, Input } from '@angular/core';
import { Cantante  } from './cantante';

@Component({
	selector: 'cantante-detail',
	template: `
				<!-- Desde este punto esta la vista de detalle -->
  				<div *ngIf="cantante_para_detalle">
	  				<h2> Vista de Detalle {{cantante_para_detalle.name}} </h2>

	  				<div><label>id: </label>  <input [(ngModel)]="cantante_para_detalle.id"> </div>
	  				<div><label>name: </label> <input [(ngModel)]="cantante_para_detalle.name" placeholder="name"> </div>
	  				<div><label>video: </label>
	  					<a target="_blank" rel="noopener" href="{{cantante_para_detalle.video}}">  {{cantante_para_detalle.video}}</a>
	  				</div>
	  			</div>
  			`
})

export class CantanteDetailComponent{

	@Input() cantante_para_detalle: Cantante ;
	
}