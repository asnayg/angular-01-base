import { Component, OnInit } from '@angular/core';

export interface Personaje {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  personajes : Personaje[] = [
    {
      nombre: 'lolo',
      poder:99
    },
    {
      nombre: 'kuko',
      poder:55
    }
  ];
  nuevo : Personaje = {
    nombre:'',
    poder:0
  }

  agregar() {
    this.personajes.push(this.nuevo);
    this.nuevo = {nombre:'', poder:0};
  }

}
