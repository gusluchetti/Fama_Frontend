import { Component, OnInit } from '@angular/core';
import { MatriculaService } from './matricula.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlunoModel } from '../models/models';

@Component({
	selector: 'app-matricula',
	templateUrl: './matricula.component.html',
	styleUrls: ['../app.component.css']
})
export class MatriculaComponent {
	alunoWasSelected: boolean = false;
	selectedAluno = {} as AlunoModel;

	ngOnInit() {
	}

	constructor(
		private service: MatriculaService,
		private modalService: NgbModal) {

	}

	onCancel() { 
		this.selectedAluno = {} as AlunoModel 
	}

	onEdit(a?: AlunoModel) {

	}

	onFinish() {

	}
}
