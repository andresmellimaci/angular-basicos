import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base:number = 5;
  
    modificarValor(numero:number):void{
      this.numero += numero;
    };
}