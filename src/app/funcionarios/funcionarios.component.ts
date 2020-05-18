import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../models/models';
import { FuncionarioService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['../app.component.css']
})
export class FuncionariosComponent{
  selectedFuncionario: FuncionarioModel = null
  emptyFuncionario = {} as FuncionarioModel
  listFuncionarios = [] as FuncionarioModel[]

  editing: boolean = false
  funcionarioExists: boolean = false


  ngOnInit() { 
    this.service.listar().subscribe((data: any) => {
      this.listFuncionarios = data;
    });
  }

  constructor(
    private service: FuncionarioService) { 

    }

  changeMode() { this.editing = !this.editing }

  onEdit(c?: FuncionarioModel) {
    if(c != null || c!= undefined) {
      this.selectedFuncionario = c
      this.funcionarioExists = true
    }
    this.changeMode()
  }

  onRemove(c: FuncionarioModel) {
    this.service.excluir(c.idFuncionario).subscribe();
    let index = this.listFuncionarios.indexOf(c)

    if(index != null || index != undefined) {
      this.listFuncionarios.splice(index, 1)
    }
  }

  onCancel() {
    this.selectedFuncionario = {} as FuncionarioModel
    this.changeMode()
  }

  //!!!!!TODO: ONLY CHANGE LISTS IF SUCESS
  onFinish() {
    console.log("funcionario a ser enviado", this.selectedFuncionario)
    // alterar funcionario existente, else adicionar novo funcionario
     if(this.funcionarioExists) {
      console.log("UPDATE")   
      this.service.alterar(this.selectedFuncionario).subscribe((data: any) => {});
      let success = true;

      if (success) {
        console.log("Funcionario alterado com sucesso!")
      }
    }
     else {
      console.log("CREATE")   
      this.service.criar(this.selectedFuncionario).subscribe((data: any) => {});
      let success = true;

      if (success) {
        this.listFuncionarios.push(this.selectedFuncionario)
        console.log("Funcionario criado com sucesso!")

      }
    }
    this.changeMode()
  }
}
