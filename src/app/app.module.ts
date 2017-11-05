import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { CantantesComponent } from './cantantes.component';
import { CantanteDetailComponent} from './cantante-detail.component';
import { CantanteService } from './cantante.service';

@NgModule({
  declarations: [ AppComponent, CantantesComponent, CantanteDetailComponent ],
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([ { path: 'cantantes', component: CantantesComponent } ])  ],
  providers:    [ CantanteService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
