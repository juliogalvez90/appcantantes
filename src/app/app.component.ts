import { Component }   from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
            <h1>{{title}}</h1>
            <nav>
            <a routerLink="/cuadrodecontrol">Cuadro de Control</a>
            <a routerLink="/cantantes">Cantantes</a>
            </nav>
            <router-outlet></router-outlet>
  			`
})

export class AppComponent {
  
  title = 'Cantantes de Santiago y Matías';
  
}


