import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CantanteDetailComponent} from './cantante-detail.component';
import { CantanteService } from './cantante.service';

@NgModule({
  declarations: [ AppComponent, CantanteDetailComponent ],
  imports:      [ BrowserModule, FormsModule ],
  providers:    [ CantanteService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
