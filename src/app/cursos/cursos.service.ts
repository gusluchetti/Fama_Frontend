import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CursoModel } from '../models';

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

    excluirCurso(idCurso: number) {
        return this.http.delete('api/curso/excluir/'+ idCurso, this.httpOptions);
    }

    listar() {
        return this.http.get('/api/curso/listar');
    }
    

}