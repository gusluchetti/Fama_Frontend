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
		this.service.obter(a.idAluno)
		.subscribe(
			(data: any) => { this.modalInfo = data },
			(error) => {  },
			() => { this.modalService.open(modal) }
		)
	}

	dismissModal() {
		this.modalService.dismissAll()
		this.selectedAluno = null
	}

	onEdit(a?: AlunoModel) {
		if (a != null || a != undefined) {
			this.service.obter(a.idAluno)
			.subscribe(
			(data: any) => {
				this.selectedAluno = data
			},
			(error) => { console.log('oh no!') },
			() => { 
				this.alunoExists = true
				this.changeMode() 
			});
		}

		else this.alunoExists = false
		this.changeMode()
	}

	onRemove(a: AlunoModel) {
		this.service.excluir(a.idAluno)
		.subscribe(
			() => {
				let index = this.listAlunos.indexOf(a)
				if (index != null || index != undefined) {
					this.listAlunos.splice(index, 1)
				}
				console.log('Aluno removido com sucesso!')
			}
		);	
	}

	onFinish() {
		if (this.alunoExists) {
			this.service.alterar(this.selectedAluno)
			.subscribe(
				() => { 
					this.service.listar().subscribe((data: any) => {
						this.listAlunos = data;
					});
					console.log('Aluno alterado com sucesso!') 
				}
			);
		}
		else {
			this.service.criar(this.selectedAluno)
			.subscribe(
				() => { 
					this.listAlunos.push(this.selectedAluno) 
					console.log('Aluno criado com sucesso!')
				}
			);
		}
		this.changeMode()
	}
}

