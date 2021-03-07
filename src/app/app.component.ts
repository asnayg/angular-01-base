import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  numero : number = 10;
  base:number = 5;

  restar():void{
     this.numero -= 1;
  }

  acumlar (valor:number){
    this.numero += valor;
  }

}
