import { Component }   from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
            <h1>{{title}}</h1>
            <a routerLink="/cantantes">Cantantes</a>
            <router-outlet></router-outlet>
            
  			`
})

export class AppComponent {
  
  title = 'Cantantes de Santiago y Matías';
  
}


