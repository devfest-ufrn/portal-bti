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
	'ano': number,
	'codigo-componente': string,
	'codigo-turma':string,
	'descricao-horario':string,
	'id-componente':number,
	'id-discente':number,
	'id-situacao-turma':number,
	'id-turma':number,
	'id-unidade':number,
	'local':string,
	'nome-componente':string,
	'periodo':number,
	'sigla-nivel':string,
	'subturma':boolean
}
