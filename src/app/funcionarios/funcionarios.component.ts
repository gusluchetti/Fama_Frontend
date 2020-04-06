import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['../app.component.css']
})

@NgModule({
  declarations: [FuncionariosComponent],
  imports: [
    FormsModule
  ]
})

export class FuncionariosComponent {}
