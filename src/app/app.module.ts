import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

import { CursoService } from './cursos/cursos.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AlunoService } from './alunos/alunos.service';
import { FuncionarioService } from './funcionarios/funcionarios.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    CursosComponent,
    FuncionariosComponent,
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
    FuncionarioService
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
