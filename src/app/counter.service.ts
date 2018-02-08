import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  count = 0;
  constructor() { }

  increment() {
    console.log(++this.count);
  }
}
