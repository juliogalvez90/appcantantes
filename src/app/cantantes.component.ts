import { Component }   from '@angular/core';

import { Cantante  }   from './cantante';
import { CantanteService } from './cantante.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'mis-cantantes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  				

  				<!-- Desde este punto se muestra toda la lista de cantantes -->
  				<h2>Mis Cantantes:</h2>
				<ul class="cantantes">
				  <li *ngFor="let cantanteLeido of lista_cantantes"  (click)="onSelect(cantanteLeido)"    [class.selected]="cantanteLeido == cantante_seleccionado">
				    <!-- cada cantante va aqui -->

				    <span class="badge">{{cantanteLeido.id}}</span> {{cantanteLeido.name}}

				  </li>
				</ul>

				<cantante-detail [cantante_para_detalle]="cantante_seleccionado"></cantante-detail>


  			`
})

export class CantantesComponent implements OnInit {
  
  lista_cantantes: Cantante[];

  cantante_seleccionado: Cantante ;
  
  /*Crea la instancia del Servicio*/
  constructor(private servicioDeCantantes: CantanteService) { };

  /*Consume servicio para obtener el listado de Cantantes*/
  getCantantes(): void{
  	this.servicioDeCantantes.getCantantesSlowly().then(lista_cantantes => this.lista_cantantes = lista_cantantes)
  }


  ngOnInit(): void {
    this.getCantantes();
  }


  /*Actua cuando se selecciona un Cantante*/
  onSelect(cantante_entrada: Cantante): void {
  			this.cantante_seleccionado = cantante_entrada ;
  }

}