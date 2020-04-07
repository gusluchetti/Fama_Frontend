export interface AlunoModel {
    idAluno: number;
    dataNascAluno: number;
    cpfAluno: string;
    rgAluno: string;
    estadoCivilAluno: string;
    emailAluno: string;
    telefoneAluno: string;
    profissaoAluno: string;
    nomeAluno: string;
    idCurso: number;
    idEndereco: number;
    numeroSisAluno: number;
}

export interface CursoModel {
    idCurso: number;
    nomeCurso: string;
    responsavelCurso: string;
    horasSemanaisCurso: number;
    duracaoCurso: string;
    descricaoCurso: string;
}

export interface FuncionarioModel {
    idFuncionario: number;
    nomeFuncionario: string; 
    dataNascFuncionario: number; 
    cpfFuncionario: string; 
    rgFuncionario: string; 
    estadoCivilFuncionario: string; 
    emailFuncionario: string; 
    telefoneFuncionario: string; 
    atuacaoFuncionario: string; 
    cargaHorariaFuncionario: string; 
    salarioFuncionario: string; 
    formacaoFuncionario: string; 
    idEndereco: number; 
    numeroSisFuncionario: number;
}