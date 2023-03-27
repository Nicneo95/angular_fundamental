import { Component } from '@angular/core';
import { Activities } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form Notes';

  processNewActivity(activities: Activities) {
    console.info('>>>> process activities: ', activities)
  }
}
