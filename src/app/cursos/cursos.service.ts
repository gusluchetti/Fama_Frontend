import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CursoModel, AulaModel } from '../models/models';

@NgModule()
export class CursoService {

    curso = {} as CursoModel;
    lista = [] as CursoModel[];

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { 
        this.curso = {} as CursoModel
        this.lista = [] as CursoModel[]
    }

    criar(curso: CursoModel) {
        return this.http.post('/api/curso/criar', JSON.stringify(curso), this.httpOptions);
    }

    obter(idCurso: number) {
        console.log('hey! inside service')
        return this.http.get(`/api/curso/obter/?idCurso=${idCurso}`, this.httpOptions);
    }

    listar() {
        return this.http.get('/api/curso/listar');
    }

    alterar(curso: CursoModel) {
        return this.http.post('/api/curso/alterar', JSON.stringify(curso), this.httpOptions);
    }

    excluir(idCurso: number) {
        return this.http.get('/api/curso/excluir/?idCurso='+ idCurso, this.httpOptions);
    }
}