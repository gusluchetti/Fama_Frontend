import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { AlunoModel, AulaModel } from '../models/models';

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

    adicionar(aluno: AlunoModel) {
        return this.http.post('/api/matricula/adicionar', JSON.stringify(aluno), this.httpOptions);
    }

    remover(aluno: AlunoModel, aula: AulaModel) {
        return this.http.get(`/api/matricula/remover/?idAluno=${aluno.idAluno}&?idAula=${aula.idAula}`, this.httpOptions);
    }
}