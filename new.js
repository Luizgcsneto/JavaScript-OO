function User(nome,email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function (){
        return `${this.nome}, ${this.email}`
    }
}

function Admin(role){
    User.call(this,'Lorenzo','filho@gmail.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User)

const newUser = new Admin('admin')

newUser.exibirInfos()
console.log(newUser.role)

const info = newUser.exibirInfos()

console.log(info)

const usuario = {
    exibirInfo: function(nome){
        return nome
    }
}

const thais = Object.create(usuario)
console.log(thais.exibirInfo('luiz'))