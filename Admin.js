import User from './User.js'

export default class Admin extends User {
    constructor(nome,email,dataNascimento,role = 'admin',ativo = true){
        super(nome,email,dataNascimento,role,ativo)
    }

    criarCurso(nomeCurso,vagas){
        return `Curso Criado ${nomeCurso} com ${vagas} vagas`
    }
}

