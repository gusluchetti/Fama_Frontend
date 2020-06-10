import { Component, OnInit } from '@angular/core';
import { MatriculaService } from './matricula.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlunoModel, CursoModel, AulaModel, PresencaModel } from '../models/models';
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
	selectedAulas = [] as number[];
	matricula = {} as PresencaModel;

	ngOnInit() {
		this.cursoService.listar()
		.subscribe(
		(data: any) => {
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
		this.selectedCurso = {} as CursoModel 
	}

	addSelectedAulas(key: any, checked: boolean) {
		if (!this.selectedAulas.includes(key) && checked)  this.selectedAulas.push(key)
		else if (this.selectedAulas.includes(key) && !checked)  this.selectedAulas.splice(this.selectedAulas.indexOf(key), 1)
	
		console.log(this.selectedAulas)
	}

	adicionarAluno() {
		this.matricula.idAulas = this.selectedAulas
		this.matricula.idAluno = this.selectedAluno.idAluno
		
		this.service.adicionar(this.matricula)
		.subscribe(
			(data) => {

			},
			(error) => {

			},
			() => {
				console.log('Aluno adicionado as aulas com sucesso!')
			},
		)
	}

	marcarPresenca() {
		this.matricula.idAulas = this.selectedAulas
		this.matricula.idAluno = this.selectedAluno.idAluno
		
		this.service.adicionar(this.matricula)
		.subscribe(
			(data) => {

			},
			(error) => {

			},
			() => {
				console.log('Presenca da aula marcada com sucesso!')
			},
		)
	}
}
