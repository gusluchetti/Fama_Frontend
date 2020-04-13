import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CursoModel } from '../models';

@NgModule()
export class CursoService {

    private subscriber: any;
    lista: any;


    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    async excluir(idCurso: number) {
        this.subscriber = this.route.params.subscribe(params => {
            return this.http.delete('/api/curso/excluir/' + idCurso).subscribe((data:any) => {});
        });
    }

    listar() {
        return this.http.get('/api/curso/listar');
    }
    

}