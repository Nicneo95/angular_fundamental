import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharing_data_parentChild_via_InputOutput';
  // create a property that we will bind to the child
  // property to pass data to child component 
  parentBeverage = "Coffee";
  beverages = ['Milk', 'Milo', 'Ovaltine']

  // create this function when we listen to the event in child 
  // component what we want to execute in the parent class
  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('beverageInput');
    input.value= '';

  }
}
