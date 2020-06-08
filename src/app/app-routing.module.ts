import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MatriculaComponent } from './matricula/matricula.component';

const routes: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    data: { title: 'Alunos' }
  },
  {
    path: 'cursos',
    component: CursosComponent,
    data: { title: 'Cursos' }
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
    data: { title: 'Funcionários' }
  },
  {
    path: 'matricula',
    component: MatriculaComponent,
    data: { title: 'Matrícula' }
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
