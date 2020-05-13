import { Component } from '@angular/core';
import { AlunoModel } from '../models/models'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['../app.component.css']
})
export class AlunosComponent {
alunos: AlunoModel[] = [];

  constructor() {
    
  }
  
  // alunos = [
  //   {
  //     idCurso: 1,
  //     nomeAluno: 'leo',
  //     idAluno: 1
  //   },
  //   {
  //     idCurso: 1,
  //     nomeAluno: 'leo',
  //     idAluno: 1
  //   },
  //   {
  //     idCurso: 1,
  //     nomeAluno: 'leo',
  //     idAluno: 1
  //   },
  //   {
  //     idCurso: 1,
  //     nomeAluno: 'leo',
  //     idAluno: 1
  //   },
  // ]

}