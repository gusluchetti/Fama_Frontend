import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { AlunoModel } from '../models/models';

@NgModule()
export class AlunoService {  

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

    criar(aluno: AlunoModel) {
        return this.http.post('/api/aluno/criar', JSON.stringify(aluno), this.httpOptions);
    }

    listar() {
        return this.http.get('/api/aluno/listar');
    }

    alterar(aluno: AlunoModel) {
        return this.http.post('/api/aluno/alterar', JSON.stringify(aluno), this.httpOptions);
    }

    excluir(idAluno: number) {
        return this.http.get('/api/aluno/excluir/?idAluno='+ idAluno, this.httpOptions);
    }
    
}