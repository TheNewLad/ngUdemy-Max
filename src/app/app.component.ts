import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNumber: number;

  onUpdateNumber(number: number) {
    this.currentNumber = number;
  }
}
