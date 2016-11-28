import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kra-home',
  templateUrl: './home.component.html',
  styles: [`
    .jumbotron{
      padding:10px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
