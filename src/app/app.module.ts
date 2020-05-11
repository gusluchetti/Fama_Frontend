import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

import { CursoService } from './cursos/cursos.service';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { AlunoService } from './alunos/alunos.service';
>>>>>>> develop

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CursoService,
    AlunoService
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
