import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

import { Cantante  }   from './cantante';
import { CantanteService } from './cantante.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'mis-cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})

export class CantantesComponent implements OnInit {
  
  lista_cantantes: Cantante[];
  cantante_seleccionado: Cantante ;
  
  /*Crea la instancia del Servicio y el enrutamiento a la vista de detalle*/
  constructor(
                private servicioDeCantantes: CantanteService, 
                private rutaparadetalle: Router
              ) { };

  /*Consume servicio para obtener el listado de Cantantes*/
  getCantantes(): void{
  	this.servicioDeCantantes.getCantantes().then(lista_cantantes => this.lista_cantantes = lista_cantantes)
  }


  ngOnInit(): void {
    this.getCantantes();
  }


  /*Actua cuando se selecciona un Cantante*/
  onSelect(cantante_entrada: Cantante): void {
  			this.cantante_seleccionado = cantante_entrada ;
  }


  /*Ejecuta la vista de detalles*/
  iraDetalles(): void {
    this.rutaparadetalle.navigate(['/detalle', this.cantante_seleccionado.id]);
  }

}