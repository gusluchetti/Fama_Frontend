import { Component } from '@angular/core';
import { FuncionarioModel } from '../models/models';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['../app.component.css']
})
export class FuncionariosComponent{
// funcionarios: FuncionarioModel [] = [];

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
