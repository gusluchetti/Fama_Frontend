import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { FuncionarioModel } from '../models/models';

@NgModule()
export class FuncionarioService {

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

    criar(funcionario: FuncionarioModel) {
        return this.http.post('/api/funcionario/criar', JSON.stringify(funcionario), this.httpOptions);
    }

    obter(idFuncionario: number) {
        return this.http.get('/api/funcionario/obter/?idFuncionario='+ idFuncionario, this.httpOptions);
    }

    listar() {
        return this.http.get('/api/funcionario/listar');
    }

    alterar(funcionario: FuncionarioModel) {
        return this.http.post('/api/funcionario/alterar', JSON.stringify(funcionario), this.httpOptions);
    }

    excluir(idFuncionario: number) {
        return this.http.get('/api/funcionario/excluir/?idFuncionario='+ idFuncionario, this.httpOptions);
    }
    
}