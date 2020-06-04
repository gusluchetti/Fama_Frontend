import { Component, OnInit } from '@angular/core';
import { CursoModel, AulaModel, DiaModel } from '../models/models';
import { CursoService } from './cursos.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AulaService } from './aulas/aulas.service';

@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['../app.component.css']
})
export class CursosComponent {
	diasSemana = [] as DiaModel[]
	selectedCurso = {} as CursoModel
	selectedAula = {} as AulaModel
	listCursos = [] as CursoModel[]
	listAulas = [] as AulaModel[]

	addingAula: boolean = false
	editingAula: boolean = false
	aulaExists: boolean = false

	editing: boolean = false
	cursoExists: boolean = false

	ngOnInit() {
		this.service.listar().subscribe((data: any) => {
			this.listCursos = data;
		});
	}

	constructor(
		private service: CursoService,
		private aulaService: AulaService,
		private modalService: NgbModal) {

	}

	onCancel() {
		this.selectedCurso = {} as CursoModel
	}

	changeMode() {
		this.editing = !this.editing
	}

	openInfoModal(c: CursoModel, modal: any) {
		this.service.obter(c.idCurso).subscribe((data: any) => {
			this.selectedCurso = data

			this.aulaService.listar(c.idCurso).subscribe((data: any) => {
					this.listAulas = data
			})
		});
		this.modalService.open(modal)
	}

	dismissModal() {
		this.modalService.dismissAll()
		this.selectedCurso = null
	}

	onEdit(c?: CursoModel) {
		if (c != null || c != undefined) {
			this.service.obter(c.idCurso).subscribe((data: any) => {
				this.selectedCurso = data
			});
			this.cursoExists = true
		}
		else this.cursoExists = false

		this.changeMode()
	}

	onRemove(c: CursoModel) {
		this.service.excluir(c.idCurso).subscribe();
		let index = this.listCursos.indexOf(c)

		if (index != null || index != undefined) {
			this.listCursos.splice(index, 1)
		}
	}

	onFinish() {
		if (this.cursoExists) {
			this.service.alterar(this.selectedCurso).subscribe((data: any) => { });
			let success = true;

			if (success) { }
		}
		else {
			this.service.criar(this.selectedCurso).subscribe((data: any) => { });
			let success = true;

			if (success) this.listCursos.push(this.selectedCurso)
		}
		this.changeMode()
	}
}
