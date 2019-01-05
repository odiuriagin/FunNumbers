import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  number: number;
  numberFacts: Array<string>;

  constructor(private numbers: NumbersService) { }

  ngOnInit() {
    this.numberFacts = [];
  }

  addNumber() {
    this.numbers.getNumberFact(this.number).subscribe( fact => {
      this.numberFacts = this.numberFacts.concat(fact.text)
      console.log(this.numberFacts[0]);
  })
  }

}
