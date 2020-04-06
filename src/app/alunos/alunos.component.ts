import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['../app.component.css']
})

@NgModule({
  declarations: [AlunosComponent],
  imports: [
    FormsModule
  ]
})

export class AlunosComponent {}

let alunos: string[] = ['teste0', 'teste1']
console.log(alunos)