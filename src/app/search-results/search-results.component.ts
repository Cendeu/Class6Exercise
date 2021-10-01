import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  // the text from the previous event
  @Input() searchText: string;


  constructor() { }

  ngOnInit(): void {
  }
}
