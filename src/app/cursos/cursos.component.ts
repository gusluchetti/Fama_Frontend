import { Component, OnInit } from '@angular/core';
import { CursoModel } from '../models/models';
import { CursoService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})
export class CursosComponent{
  selectedCurso = {} as CursoModel
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

  changeMode() { this.editing = !this.editing }

  onEdit(c?: CursoModel) {
    if(c != null || c!= undefined) {
      this.selectedCurso = c
      this.cursoExists = true
    }
    this.changeMode()
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
    // alterar curso existente, else adicionar novo curso
     if(this.cursoExists) {
      this.service.alterar(this.selectedCurso).subscribe((data: any) => {});
      let success = true;

      if (success) { }
    }
     else {
      this.service.criar(this.selectedCurso).subscribe((data: any) => {});
      let success = true;

      if (success) this.listCursos.push(this.selectedCurso)
    }
    this.changeMode()
  }
}
