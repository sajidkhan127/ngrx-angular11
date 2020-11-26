import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened$: Observable<any> = new Observable();
  selection$: Observable<any> = new Observable();
  stream!: MediaStream;
  title = 'ngpuchdb';
}
