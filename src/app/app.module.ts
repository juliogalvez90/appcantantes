import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';
import { FormsModule }               from '@angular/forms';

import { AppRoutingModule }          from './app-routing.module';


import { AppComponent }              from './app.component';
import { CantantesComponent }        from './cantantes.component';
import { CantanteDetailComponent}    from './cantante-detail.component';
import { CantanteService }           from './cantante.service';
import { CuadroDeControlComponent }  from './cuadro-de-control.component';

@NgModule({
  declarations: [ AppComponent, CantantesComponent, CantanteDetailComponent, CuadroDeControlComponent ],
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  providers:    [ CantanteService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

