import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { AulaModel } from '../../models/models';

@NgModule()
export class AulaService {

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

    criar(aula: AulaModel) {
        return this.http.post('/api/aula/criar', JSON.stringify(aula), this.httpOptions);
    }

    listar(idCurso: number) {
        return this.http.get('/api/aula/listar/?idCurso='+ idCurso, this.httpOptions);
    }

    alterar(aula: AulaModel) {
        return this.http.post('/api/aula/alterar', JSON.stringify(aula), this.httpOptions);
    }

    excluir(idAula: number) {
        return this.http.get('/api/aula/excluir/?idAula='+ idAula, this.httpOptions);
    }

    diasSemana() {
        return this.http.get('/api/aula/dias', this.httpOptions);
    }
}