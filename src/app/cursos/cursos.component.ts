import { Component, OnInit } from '@angular/core';
import { CursoModel } from '../models/models';
import { CursoService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})
export class CursosComponent{

  editing: boolean = false;
  curso = {} as CursoModel
  listaCursos: CursoModel[] = [];

  ngOnInit() { 
    this.service.listar().subscribe((data: any) => {
      this.listaCursos = data;
    });
  }

  constructor(
    private service: CursoService) { 

    }

  changeMode() { this.editing = !this.editing }

  onEdit() {
    this.changeMode()
  }

  onCreate() {
    this.curso.idCurso
    this.changeMode()
  }

  onRemove(Curso: CursoModel) {
    let id = Curso.idCurso;
    this.service.excluirCurso(id).subscribe();
    let index = this.listaCursos.indexOf(Curso)

    if(index) {
      this.listaCursos.splice(index, 1)
    }
  }

  onFinish() {
    this.changeMode()
  }
}
