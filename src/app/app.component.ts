import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // currentNumber: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onUpdateNumber(number: number) {
    // this.currentNumber = number;
    number % 2 === 0 ? this.evenNumbers.push(number) : this.oddNumbers.push(number);
  }
}
