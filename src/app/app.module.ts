import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { AulasComponent } from './cursos/aulas/aulas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MatriculaComponent } from './matricula/matricula.component';

import { CursoService } from './cursos/cursos.service';
import { AulaService } from './cursos/aulas/aulas.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AlunoService } from './alunos/alunos.service';
import { FuncionarioService } from './funcionarios/funcionarios.service';
import { MatriculaService } from './matricula/matricula.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    CursosComponent,
    AulasComponent,
    FuncionariosComponent,
    MatriculaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlunoService,
    CursoService,
    AulaService,
    FuncionarioService,
    MatriculaService
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
