import { Component, OnInit, Input } from '@angular/core';
import { Number } from '../number';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.scss']
})
export class DisplayNumberComponent implements OnInit {

  @Input() number: Number;

  constructor(private numbers: NumbersService) { }

  ngOnInit() {
  }

  deleteNumber() {
    this.number.deleted = true;
  }

  editNumber() {
    this.number.edit = true;
  }

  saveEditedNumber(num) {
  this.numbers.getNumberFact(num).subscribe( fact => {
    this.number.text = fact.text;
  })
    this.number.edit = false;
  }

}
