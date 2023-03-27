import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  // annotate input for parent to pass data to child component
  @Input() childBeverage = "Tea (Data from child)"; 
  // annotate output and create a new subject object to fire event to pass data back to parent component
  @Output() newBeverageEvent = new Subject<string>();

  // fuction take is a value 
  // fire the event by calling .next()
  addNewBeverage(value: string) {
    this.newBeverageEvent.next(value);
  }
}
