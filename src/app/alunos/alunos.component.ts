import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['../app.component.css']
})
export class AlunosComponent {

  constructor() {
    
  }
  
  
  alunos = [
    {
      idAluno: 1,
      idCurso: 'Judo',
      nomeAluno: 'Peter Parker'
    }
  ];
  
}