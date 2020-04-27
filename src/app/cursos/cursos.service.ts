import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CursoModel } from '../models/models';

@NgModule()
export class CursoService {

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

    criar(curso: CursoModel) {
        return this.http.post('/api/curso/criar', JSON.stringify(curso), this.httpOptions);
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