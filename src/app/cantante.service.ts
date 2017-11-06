import { Injectable } from '@angular/core';

import { Cantante }   from './cantante';
import { CANTANTES }  from './mock-cantantes';

@Injectable()
export class CantanteService {
	
	getCantante(id: number): Promise<Cantante> {
    	return this.getCantantes().then(CANTANTES => CANTANTES.find(cantante => cantante.id === id )) ;        
	};

	getCantantes(): Promise<Cantante[]> {
    	return Promise.resolve(CANTANTES) ;        
	};


	getCantantesSlowly(): Promise<Cantante[]> {
  	return new Promise(resolve => {
    	// Simulate server latency with 2 second delay
    	setTimeout(() => resolve(this.getCantantes()), 2000);
  	});
}



}