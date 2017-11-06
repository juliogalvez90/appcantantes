import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common' ;
import 'rxjs/add/operator/switchMap';
import { OnInit } from '@angular/core';

import { Cantante  } from './cantante';
import { CantanteService } from './cantante.service';

@Component({
	selector: 'cantante-detail',
	templateUrl: './cantante-detail.component.html'
})

export class CantanteDetailComponent implements OnInit {

	@Input()
	cantante_para_detalle: Cantante ;

	constructor( 
				private serviciodecantantes: CantanteService,
				private ruta: ActivatedRoute,
				private ubicacion: Location
	 ){ }


	ngOnInit(): void {
  			this.ruta.paramMap.switchMap((params: ParamMap) => this.serviciodecantantes.getCantante(+params.get('id'))).subscribe(cantante_para_detalle => this.cantante_para_detalle = cantante_para_detalle);
	}


	goBack(): void{
		this.ubicacion.back();
	}

	
}