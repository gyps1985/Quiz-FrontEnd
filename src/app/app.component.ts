import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<question-nav></question-nav><mat-divider></mat-divider><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
