import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchHistory = [];

  addSearchHistory(searchData) {
    // add search data (from event) to array of history
    this.searchHistory.push(searchData);
  }
}
