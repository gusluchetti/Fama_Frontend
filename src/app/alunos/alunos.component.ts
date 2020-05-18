import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../models/models';
import { AlunoService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['../app.component.css']
})
export class AlunosComponent{
  selectedAluno: AlunoModel = null
  emptyAluno = {} as AlunoModel
  listAlunos = [] as AlunoModel[]

  editing: boolean = false
  alunoExists: boolean = false


  ngOnInit() { 
    this.service.listar().subscribe((data: any) => {
      this.listAlunos = data;
    });
  }

  constructor(
    private service: AlunoService) { 

    }

  changeMode() { this.editing = !this.editing }

  onEdit(c?: AlunoModel) {
    if(c != null || c!= undefined) {
      this.selectedAluno = c
      this.alunoExists = true
    }
    this.changeMode()
  }

  onRemove(c: AlunoModel) {
    this.service.excluir(c.idAluno).subscribe();
    let index = this.listAlunos.indexOf(c)

    if(index != null || index != undefined) {
      this.listAlunos.splice(index, 1)
    }
  }

  onCancel() {
    this.selectedAluno = {} as AlunoModel
    this.changeMode()
  }

  //!!!!!TODO: ONLY CHANGE LISTS IF SUCESS
  onFinish() {
    console.log("aluno a ser enviado", this.selectedAluno)
    // alterar aluno existente, else adicionar novo aluno
     if(this.alunoExists) {
      console.log("UPDATE")   
      this.service.alterar(this.selectedAluno).subscribe((data: any) => {});
      let success = true;

      if (success) {
        console.log("Aluno alterado com sucesso!")
      }
    }
     else {
      console.log("CREATE")   
      this.service.criar(this.selectedAluno).subscribe((data: any) => {});
      let success = true;

      if (success) {
        this.listAlunos.push(this.selectedAluno)
        console.log("Aluno criado com sucesso!")

      }
    }
    this.changeMode()
  }
}
