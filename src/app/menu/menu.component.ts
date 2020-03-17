import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuAberto = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.menuAberto = !this.menuAberto;
  }

}
