import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})
export class CursosComponent{

  constructor() { }

  cursos = [
    {
      nomeCurso: 'Karate'
    },
    {
      nomeCurso: 'Arco e Flecha'
    },
  ];

}
