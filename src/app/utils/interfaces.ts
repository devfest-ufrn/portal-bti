export interface Disciplina {
	'carga-horaria-total': number,
	'codigo': number,
	'co-requisitos': string,
	'departamento': string,
	'disciplina-obrigatoria': boolean,
	'equivalentes': string,
	'id-componente': number,
	'id-matriz-curricular': number,
	'nome': string,
	'pre-requisitos': string,
	'semestre-oferta': number,
	'componentesBloco': Disciplina[]
}

export interface Discente {
	'cpf': string,
    'nome': string,
	'id_discente': number,
    'username': string,
    'semestre': string[];
    'turmas': Turma[];
}

export interface Turma {
	'nome-componente': string,
	'descricao-horario': string,
	'codigo-componente': string,
	'id-componente': number
}
