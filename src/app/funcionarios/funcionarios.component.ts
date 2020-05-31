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
	selectedFuncionario: FuncionarioModel = null
	emptyFuncionario = {} as FuncionarioModel
	listFuncionarios = [] as FuncionarioModel[]

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

	changeMode() { this.editing = !this.editing }

	openInfoModal(c: FuncionarioModel, modal: any) {
		this.service.obter(c.idFuncionario).subscribe((data: any) => {
			this.selectedFuncionario = data
		});
		this.modalService.open(modal)
	}

	onEdit(c?: FuncionarioModel) {
		if (c != null || c != undefined) {
			this.selectedFuncionario = c
			this.funcionarioExists = true
		}
		this.changeMode()
	}

	onRemove(c: FuncionarioModel) {
		this.service.excluir(c.idFuncionario).subscribe();
		let index = this.listFuncionarios.indexOf(c)

		if (index != null || index != undefined) {
			this.listFuncionarios.splice(index, 1)
		}
	}

	onCancel() {
		this.selectedFuncionario = {} as FuncionarioModel
		this.changeMode()
	}

	onFinish() {
		if (this.funcionarioExists) {
			this.service.alterar(this.selectedFuncionario).subscribe((data: any) => { });
		}
		else {
			this.service.criar(this.selectedFuncionario).subscribe((data: any) => { });
			let success = true;

			if (success) {
				this.listFuncionarios.push(this.selectedFuncionario)
			}
		}
		this.changeMode()
	}
}
