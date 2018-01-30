import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  oddContainer: number[] = [];

  constructor() {
    // this.oddContainer.push(oddNumber);  
  }

  ngOnInit() {
  }

}
