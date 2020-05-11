import { Component, OnInit } from '@angular/core';
import { CursoModel } from '../models/models';
import { CursoService } from './cursos.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})
export class CursosComponent{
  selectedCurso: CursoModel = null
  emptyCurso = {} as CursoModel
  listCursos = [] as CursoModel[]

  editing: boolean = false
  cursoExists: boolean = false

  ngOnInit() { 
    this.service.listar().subscribe((data: any) => {
      this.listCursos = data;
    });
  }

  constructor(
    private service: CursoService) { 

    }

  changeMode() { this.editing = !this.editing; }

  onEdit(c?: CursoModel) {
    if(c != null || c!= undefined) {
      this.selectedCurso = c
      this.cursoExists = true
    }
    this.onCancel()
  }

  onRemove(c: CursoModel) {
    this.service.excluir(c.idCurso).subscribe();
    let index = this.listCursos.indexOf(c)

    if(index != null || index != undefined) {
      this.listCursos.splice(index, 1)
    }
  }

  onCancel() {
    this.selectedCurso = {} as CursoModel
    this.changeMode()
  }

  //!!!!!TODO: ONLY CHANGE LISTS IF SUCESS
  onFinish() {
    console.log("curso a ser enviado", this.selectedCurso)
    // alterar curso existente, else adicionar novo curso
     if(this.cursoExists) {
      console.log("UPDATE")   
      this.service.alterar(this.selectedCurso).subscribe((data: any) => {});
      let success = true;

      if (success) {
        console.log("Curso alterado com sucesso!")
      }
    }
     else {
      console.log("CREATE")   
      this.service.criar(this.selectedCurso).subscribe((data: any) => {});
      let success = true;

      if (success) {
        this.listCursos.push(this.selectedCurso)
        console.log("Curso criado com sucesso!")

      }
    }
    this.changeMode()
  }
}
