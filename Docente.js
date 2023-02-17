import User from './User.js'


export default class Docente extends User {
    constructor(nome,email,dataNascimento,role = 'docente',ativo = true){
        super(nome,email,dataNascimento,role,ativo)
    }
}