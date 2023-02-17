export default class User {
    #nome
    #email
    #dataNascimento
    #role
    #ativo
    constructor(nome,email,dataNascimento,role,ativo = true){
        this.#nome =  nome
        this.#email = email
        this.#dataNascimento = dataNascimento
        this.#role = role || 'estudando'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome =  nome
    }

    get email(){
        return this.#email
    }

    set email(email){
        this.#email = email
    }

    get dataNascimento(){
        return this.#dataNascimento
    }

    set dataNascimento(dataNascimento){
        this.#dataNascimento = dataNascimento
    }

    get role(){
        return this.#role
    }

    set role(role){
        this.#role = role
    }

    get ativo(){
        return this.#ativo
    }

    set ativo(ativo){
        this.#ativo = ativo
    }

    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            dataNascimento: this.#dataNascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfo(){
        // const objUser = this.#montaObjUser()
        return `${this.nome}, ${this.email}, ${this.dataNascimento}, ${this.role}, ${this.ativo}`
    }
}

