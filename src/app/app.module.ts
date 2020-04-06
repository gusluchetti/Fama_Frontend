import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CadastroComponent } from './alunos/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    CursosComponent,
    FuncionariosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
