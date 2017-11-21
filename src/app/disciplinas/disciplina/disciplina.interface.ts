export interface Disciplina {
	'carga-horaria-total':number,
	'codigo':number,
	'co-requisitos':string,
	'departamento':string,
	'disciplina-obrigatoria':boolean,
	'equivalentes':string,
	'id-componente':number,
	'id-matriz-curricular':number,
	'nome':string,
	'pre-requisitos':string,
	'semestre-oferta':number,
	'componentesBloco':Disciplina[]
}