import { Component, OnInit, Input } from '@angular/core';
import { CursoModel, AulaModel, DiaModel } from '../../models/models';
import { AulaService } from './aulas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-aulas',
	templateUrl: './aulas.component.html',
	styleUrls: ['../../app.component.css']
})


export class AulasComponent {
	
	@Input() curso: CursoModel	
	@Input() listAulas: AulaModel[]

	diasSemana = [] as DiaModel[]
	selectedAula = {} as AulaModel

	addingAula: boolean = false
	editingAula: boolean = false
	aulaExists: boolean = false

	ngOnInit() {
		this.service.dias().subscribe( (dias: DiaModel[]) => {
			this.diasSemana = dias
		})

		this.service.listar(this.curso.idCurso).subscribe((aulas: AulaModel[]) => {
			this.listAulas = aulas;
		});
	}

	constructor(
		private service: AulaService,
		private modalService: NgbModal) { 

		}
	
	onEdit(a?: AulaModel) {
		if (a == null) {
			this.aulaExists = false
			this.addingAula = true
		}
		else {
			this.aulaExists = true
			this.editingAula = true
		}
	}

	onRemove(a: AulaModel) {
	
	}

	onFinish() {

	}

}
