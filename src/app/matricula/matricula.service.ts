import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CursoModel, AulaModel, PresencaModel } from '../models/models';

@NgModule()
export class MatriculaService {

    private subscriber: any;
    lista: any;

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    adicionar(aluno: PresencaModel) {
        return this.http.post('/api/matricula/adicionar', JSON.stringify(aluno), this.httpOptions);
    }

    marcar(alunos: PresencaModel[], aula: AulaModel) {
      return this.http.post('/api/matricula/marcar', JSON.stringify(alunos), this.httpOptions);
  }
}