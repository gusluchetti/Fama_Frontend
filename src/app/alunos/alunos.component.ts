import { Component } from '@angular/core';
import { AlunoModel } from '../models/models'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['../app.component.css']
})
export class AlunosComponent {

  constructor() {
    
  }
  
alunos: AlunoModel[] = [];

}