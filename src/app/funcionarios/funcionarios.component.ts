import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../models/models';
import { FuncionarioService } from './funcionarios.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-funcionarios',
	templateUrl: './funcionarios.component.html',
	styleUrls: ['../app.component.css']
})
export class FuncionariosComponent {
	selectedFuncionario = {} as FuncionarioModel
	listFuncionarios = [] as FuncionarioModel[]
	modalInfo = {} as FuncionarioModel

	editing: boolean = false
	funcionarioExists: boolean = false


	ngOnInit() {
		this.service.listar().subscribe((data: any) => {
			this.listFuncionarios = data;
		});
	}

	constructor(
		private service: FuncionarioService,
		private modalService: NgbModal) {

	}

	
	onCancel() { 
		this.selectedFuncionario = {} as FuncionarioModel 
	}

	changeMode() { 
		this.editing = !this.editing 
	}

	openInfoModal(f: FuncionarioModel, modal: any) {
		this.service.obter(f.idFuncionario)
		.subscribe(
			(data: any) => { this.modalInfo = data },
			(error) => {  },
			() => { this.modalService.open(modal) }
		)
	}

	dismissModal() {
		this.modalService.dismissAll()
		this.selectedFuncionario = null
	}

	onEdit(f?: FuncionarioModel) {
		if (f != null || f != undefined) {
			this.service.obter(f.idFuncionario)
			.subscribe(
			(data: any) => {
				this.selectedFuncionario = data
				this.changeMode() 
			},
			(error) => { console.log('oh no!') },
			() => { 
				this.funcionarioExists = true
			});
		}
		else {
			this.funcionarioExists = false
			this.changeMode()
		}
	}


	onRemove(f: FuncionarioModel) {
		this.service.excluir(f.idFuncionario)
		.subscribe(
			() => {
				let index = this.listFuncionarios.indexOf(f)
				if (index != null || index != undefined) {
					this.listFuncionarios.splice(index, 1)
				}
				console.log('Funcionario removido com sucesso!')
			}
		);	
	}

	onFinish() {
		if (this.funcionarioExists) {
			this.service.alterar(this.selectedFuncionario)
			.subscribe(
				() => { 
					this.service.listar().subscribe((data: any) => {
						this.listFuncionarios = data;
					});
					console.log('Funcionario alterado com sucesso!');
				}
			);
		}
		else {
			this.service.criar(this.selectedFuncionario)
			.subscribe(
				() => { 
					this.listFuncionarios.push(this.selectedFuncionario) 
					console.log('Funcionario criado com sucesso!')
				}
			);
		}
		this.changeMode()
	}
}
