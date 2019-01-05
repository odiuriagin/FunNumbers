import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dateFact: string;

  constructor(private numbers: NumbersService) { }

  ngOnInit() {
    this.numbers.getDateFact().subscribe( fact => {
        this.dateFact = fact.text
    })
  }
}
