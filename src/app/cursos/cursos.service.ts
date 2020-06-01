import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CursoModel, AulaModel } from '../models/models';

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

    criarAula(aula: AulaModel) {
        return this.http.post('/api/curso/aula/criar', JSON.stringify(aula), this.httpOptions);
    }

    obter(idCurso: number) {
        return this.http.get('/api/curso/obter/?idCurso='+ idCurso, this.httpOptions);
    }

    listar() {
        return this.http.get('/api/curso/listar');
    }

    listarAulas(idCurso: number) {
        return this.http.get('/api/curso/listar_aulas/?idCurso='+ idCurso, this.httpOptions);
    }

    alterar(curso: CursoModel) {
        return this.http.post('/api/curso/alterar', JSON.stringify(curso), this.httpOptions);
    }

    alterarAula(aula: AulaModel) {
        return this.http.post('/api/curso/aula/alterar,', JSON.stringify(aula), this.httpOptions);
    }

    excluir(idCurso: number) {
        return this.http.get('/api/curso/excluir/?idCurso='+ idCurso, this.httpOptions);
    }

    excluirAula(idAula: number) {
        return this.http.get('/api/curso/aula/excluir/?idAula='+ idAula, this.httpOptions);
    }
}