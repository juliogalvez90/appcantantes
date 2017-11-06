import { Component , OnInit } from '@angular/core';

import { Cantante  }   from './cantante';
import { CantanteService } from './cantante.service';

@Component({
	selector: 'mi-cuadro-de-control',
	template: '<h3>Mi Cuadro de Control</h3>',
	templateUrl: './cuadro-de-control.component.html',
	styleUrls: [ './cuadro-de-control.component.css' ]

})

export class CuadroDeControlComponent implements OnInit {
	
		cantantes_top: Cantante[] = [];

		constructor(private servicioDeCantantes: CantanteService) { }

		ngOnInit(): void {
    		this.servicioDeCantantes.getCantantes().then(cantantes_top => this.cantantes_top = cantantes_top.slice(1, 5));
  		}

}
