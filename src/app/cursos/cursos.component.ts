import { Component, OnInit } from '@angular/core';
import { CursoModel } from '../models';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})
export class CursosComponent{

  private subscriber: any;
  listaCursos: CursoModel[] = [];

  ngOnInit()
	{
		this.subscriber = this.route.params.subscribe(params => {
	       
        this.http.get('/api/curso/listar').subscribe((data:any) => {

        this.listaCursos = (data)
        console.log(this.listaCursos)
		    });
	    });
	}

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute) { }

}
