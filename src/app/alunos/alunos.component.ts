import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../models/models';
import { AlunoService } from './alunos.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-alunos',
	templateUrl: './alunos.component.html',
	styleUrls: ['../app.component.css']
})
export class AlunosComponent {
	selectedAluno = {} as AlunoModel
	listAlunos = [] as AlunoModel[]
	modalInfo = {} as AlunoModel

	editing: boolean = false
	alunoExists: boolean = false


	ngOnInit() {
		this.service.listar().subscribe((data: any) => {
			this.listAlunos = data;
		});
	}

	constructor(
		private service: AlunoService,
		private modalService: NgbModal) {
	}

	changeMode() {
		this.editing = !this.editing
	}

	onCancel() {
		this.selectedAluno = {} as AlunoModel
	}

	openInfoModal(a: AlunoModel, modal: any) {
		this.service.obter(a.idAluno).subscribe((data: any) => {
			this.modalInfo = data
		});
		this.modalService.open(modal)
	}

	onEdit(a?: AlunoModel) {
		if (a != null || a != undefined) {
			this.service.obter(a.idAluno).subscribe((data: any) => {
				this.selectedAluno = data
			});
			this.alunoExists = true
		}
		this.changeMode()
	}

	onRemove(c: AlunoModel) {
		this.service.excluir(c.idAluno).subscribe();
		let index = this.listAlunos.indexOf(c)

		if (index != null || index != undefined) {
			this.listAlunos.splice(index, 1)
		}
	}

	async onFinish() {
		if (this.alunoExists) {
			this.service.alterar(this.selectedAluno).subscribe((data: any) => { });
			let success = true;

			if (success) {
				let index = this.listAlunos.indexOf(this.selectedAluno)
				this.listAlunos[index] = this.selectedAluno
			}
		}
		else {
			this.service.criar(this.selectedAluno).subscribe((data: any) => { });
			let success = true;

			if (success) {
				this.listAlunos.push(this.selectedAluno)
			}
		}
		this.changeMode();	
	}
}

