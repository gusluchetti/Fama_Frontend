import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

import { CursoService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    CursosComponent,
    FuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CursoService
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
