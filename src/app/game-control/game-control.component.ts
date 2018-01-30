import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number = 0;
  @Output() emitNumber = new EventEmitter<number>();
  ref;
  gameStarted = false;
  
  constructor() { }

  ngOnInit() {
  }

  incrementNumber() {
    this.number++;
    this.emitNumber.emit(this.number);
    console.log(this.number);
  }

  startGame() {
    this.ref = setInterval(() => {
      this.incrementNumber();
    }, 1000);
    this.gameStarted = true;
  }

  endGame() {
    clearInterval(this.ref);
    this.gameStarted = false;
  }

}
