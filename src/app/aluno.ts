

export class Aluno {
    
    public cpf: string;
    public nome: string;
    public id_discente: number;
    public username:string;
    public semestre:string[];
    public turmas:string[][];
    
     constructor(cpf,nome,id_discente,username,semestre,turmas) {
        this.cpf = cpf;
        this.nome = nome;
        this.id_discente = id_discente;
        this.username = username;
        this.semestre = semestre;
        this.turmas = turmas;
        
    }
    
    public getTurmas(){
        return this.turmas;
    }
    public addTurma(id: string,nome: string,horario:string ,codigo:string){
        this.turmas.push([id,nome,horario,codigo]);
    }
}
