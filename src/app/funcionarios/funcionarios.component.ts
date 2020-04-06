import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['../app.component.css']
})
export class FuncionariosComponent{

  constructor() { }

  funcionarios = [
    {
      idFuncionario: 1,
      idCurso: 'Karate',
      nomeFuncionario: 'Karate Man'
    },
    {
      idFuncionario: 2,
      idCurso: 'Arco e Flecha',
      nomeFuncionario: 'Gaviao Arqueiro'
    },
  ];

}
