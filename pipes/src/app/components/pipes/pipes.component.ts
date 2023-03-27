import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dateToday!: string;
  name!: string;

  constructor() {}

  ngOnInit(): void {
      this.dateToday = new Date().toString();
      this.name = "Learning about pipes"
  }
}
