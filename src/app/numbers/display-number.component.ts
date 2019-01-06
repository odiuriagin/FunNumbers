import { Component, OnInit, Input } from '@angular/core';
import { Number } from '../number';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.scss']
})
export class DisplayNumberComponent implements OnInit {

  @Input() number: Number;

  constructor() { }

  ngOnInit() {
  }

  deleteNumber() {
    this.number.deleted = true;
  }

}
