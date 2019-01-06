import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  allNumbers: Number[];
  id: number;
  numberFacts: Array<string>;

  constructor(private numbers: NumbersService) { }

  ngOnInit() {
    this.allNumbers = [];
    this.id = 0;
  }

  addNumber() {
    this.numbers.getNumberFact(this.number).subscribe( fact => {
      fact["deleted"] = false;
      fact["edit"] = false;
      fact["id"] = this.id;
      this.allNumbers.push(fact)
      this.id++;
    })
  }

}
