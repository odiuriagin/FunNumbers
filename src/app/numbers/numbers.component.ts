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
  receivedObj: any;
  number: any;

  constructor(private numbers: NumbersService) { }

  ngOnInit() {
    this.allNumbers = [];
    this.id = 0;
  }

  addNumber() {
    this.numbers.getNumberFact(this.number).subscribe( fact => {
      this.receivedObj = fact;
      this.receivedObj["deleted"] = false;
      this.receivedObj["edit"] = false;
      this.receivedObj["id"] = this.id;
      this.allNumbers.push(this.receivedObj)
      this.id++;
      this.number = "";
    })
  }

}
