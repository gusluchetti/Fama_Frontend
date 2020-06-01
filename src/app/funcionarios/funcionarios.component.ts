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
	onCancel() { this.selectedFuncionario = {} as FuncionarioModel }

	openInfoModal(f: FuncionarioModel, modal: any) {
		this.service.obter(f.idFuncionario).subscribe((data: any) => {
			this.selectedFuncionario = data
		});
		this.modalService.open(modal)
	}

	onEdit(f?: FuncionarioModel) {
		if (f != null || f != undefined) {
			this.service.obter(f.idFuncionario).subscribe((data: any) => {
				this.selectedFuncionario = data
			});
			this.funcionarioExists = true
		}
		else this.funcionarioExists = false

		this.changeMode()
	}


	onRemove(f: FuncionarioModel) {
		this.service.excluir(f.idFuncionario).subscribe();
		let index = this.listFuncionarios.indexOf(f)

		if (index != null || index != undefined) {
			this.listFuncionarios.splice(index, 1)
		}
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

		//updating list
		this.service.listar().subscribe((data: any) => {
			this.listFuncionarios = data;
		});

	}
}
