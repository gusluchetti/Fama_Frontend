import { Component, OnInit } from '@angular/core';
import { CursoModel } from '../models';
import { HttpClient } from "@angular/common/http";
import { CursoService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})
export class CursosComponent{

  listaCursos: any = [];

  ngOnInit() { 
    this.service.listar().subscribe((data: any) => {
      this.listaCursos = data;
    });
  }

  constructor(
    private service: CursoService) { 

    }


  onRemove(idCurso: number) {
    
  }
}
