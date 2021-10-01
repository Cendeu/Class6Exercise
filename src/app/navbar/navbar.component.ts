import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Output() searchEmit = new EventEmitter<string>();
  // emit data inputted in bar on click
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(search: string) {
    //emits searchbar data outward
    this.searchEmit.emit(search);
  }
}
