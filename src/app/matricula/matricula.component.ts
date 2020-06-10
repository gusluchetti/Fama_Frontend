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
	presenca = {} as PresencaModel;
	cursoWasSelected: boolean = false;
	alunoWasSelected: boolean = false;
	selectedAluno = {} as AlunoModel;
	selectedCurso = {} as CursoModel;
	cursos = [] as CursoModel[];
	aulas = [] as AulaModel[];
	selectedAula = {} as AulaModel;
	selectedAulas = [] as number[];
	matricula = {} as PresencaModel;
	students = [] as AlunoModel[];
	selectedIdAlunos = [] as number[];


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
		this.matricula[0].idAluno = this.selectedAluno.idAluno

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

	currentAula(idAula: any) {
		if(idAula == this.selectedAula.idAula) {
			this.students = [] as AlunoModel[]
		}

		this.selectedAula.idAula = idAula
		this.service.listar(idAula)
		.subscribe(
			(data: any) => {
				this.students = data
			},
			(error) => {

			},
			() => {
				console.log('Alunos para essa aula adquiridos com sucesso!')
			}
		)
	}

	selectedStudents(student: any, isChecked: boolean) {
		if (this.selectedIdAlunos.includes(student.idAluno) && !isChecked) {
			this.selectedIdAlunos.splice(this.selectedIdAlunos.indexOf(student), 1)
		}
		else if(!this.selectedIdAlunos.includes(student) && isChecked) {
			this.selectedIdAlunos.push(student)
		}

		console.log(this.selectedIdAlunos)
	}

	marcarPresenca() {
		this.presenca.idAlunos = [] as number[]
		this.presenca.idAulas = [] as number[]

		console.log('id students = ', this.selectedIdAlunos)
		this.selectedIdAlunos.forEach((it) => {
			this.presenca.idAlunos.push(it)
		})

		console.log('id aula = ', this.selectedAula)
		this.presenca.idAulas[0] = this.selectedAula.idAula
		
		console.log('presenca', this.presenca)

		this.service.marcar(this.presenca)
		.subscribe(
			(data: any) => {
				
			},
			(error) => {

			},
			() => {
				console.log('Presenca marcada com sucesso!')
			}
		)
	}
}
