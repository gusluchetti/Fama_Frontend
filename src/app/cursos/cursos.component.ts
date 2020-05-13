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
  cursoExists: boolean = false;
  selectedCurso = {} as CursoModel
  listCursos: CursoModel[] = [];

  ngOnInit() { 
    this.service.listar().subscribe((data: any) => {
      this.listCursos = data;
    });
  }

  constructor(
    private service: CursoService) { 

    }

  changeMode() { 
    if(this.editing == true){
      this.editing = false;
    }else{
      this.editing = true;
    }
  }

  onEdit(c?: CursoModel) {
    if(c != null || c!= undefined) {
      this.selectedCurso = c
      this.cursoExists = true
    }
    console.log('edit start', this.selectedCurso)
    this.changeMode()
  }

  onRemove(c: CursoModel) {
    let id = c.idCurso;
    this.service.excluirCurso(id).subscribe();
    let index = this.listCursos.indexOf(c)

    if(index != null || index != undefined) {
      this.listCursos.splice(index, 1)
    }
  }

  onCancel() {
    this.selectedCurso = null
    this.changeMode()
  }

  onFinish() {
    console.log(this.selectedCurso)
    // curso vai ser alterado
    if(this.cursoExists) {
      // this.service.alterar(this.selectedCurso.idCurso).subscribe((data: any) => {
      // });
    }
    // curso sera criado
    else {
      // this.service.criar(this.selectedCurso).subscribe((data: any) => {
      // });
    }
    
    this.changeMode()
  }
}
