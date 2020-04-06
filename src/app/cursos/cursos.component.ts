import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})

@NgModule({
  declarations: [CursosComponent],
  imports: [
    FormsModule
  ]
})
export class CursosComponent {}
