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
}

export interface CursoModel {
    idCurso: number;
    nomeCurso: string;
    responsavelCurso: string;
    horasSemanaisCurso: number;
    duracaoCurso: string;
    descricaoCurso: string;
}

export interface AulaModel {
    idAula: number;
    idCurso: number;
    cdDia: string;
    dsDia: string;
    hrInicio: string;
    hrFim: string;
    duracao: number;
}

export interface DiaModel {
    cdDia: string;
    dsDia: string;
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
}