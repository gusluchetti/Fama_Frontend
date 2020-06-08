import { Component, OnInit } from '@angular/core';
import { MatriculaService } from './matricula.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlunoModel, CursoModel, AulaModel } from '../models/models';
import { CursoService } from '../cursos/cursos.service';
import { AlunoService } from '../alunos/alunos.service';
import { AulaService } from '../cursos/aulas/aulas.service';

@Component({
	selector: 'app-matricula',
	templateUrl: './matricula.component.html',
	styleUrls: ['../app.component.css']
})
export class MatriculaComponent {
	cursoWasSelected: boolean = false;
	alunoWasSelected: boolean = false;
	selectedAluno = {} as AlunoModel;
	selectedCurso = {} as CursoModel;
	cursos = [] as CursoModel[];
	aulas = [] as AulaModel[];

	ngOnInit() {
		this.cursoService.listar().subscribe((data: any) => {
			this.cursos = data;
		});
	}

	constructor(
		private service: MatriculaService,
		private cursoService: CursoService,
		private aulaService: AulaService,
		private alunoService: AlunoService,
		private modalService: NgbModal) {

	}

	getAulas() {
		this.aulaService.listar(this.selectedCurso.idCurso)
		.subscribe(
			(data: any) => {
				this.aulas = data;
			},
			(error) => {

			},
			() => {
				this.cursoWasSelected = true;
				console.log('Curso selecionado.')
			}
		);
	}

	getAluno(){
		this.alunoService.obter(this.selectedAluno.idAluno).subscribe(
		(data: any) => {
			this.selectedAluno = data;
		},
		(error) => {  },
		() => { 
			this.alunoWasSelected = true;
			console.log('Aluno selecionado.') 
		});
	}

	onCancel() { 
		this.selectedAluno = {} as AlunoModel 
	}

	onEdit(a?: AlunoModel) {

	}

	onFinish() {

	}
}
