const user = {
    nome: 'luiz',
    email: 'luiz@luiz.com',
    dataNascimento: '1990-02-23',
    role: 'admin',
    exibirInfos: function() {
        console.log(this.nome,this.email)
    }
}

const admin = {
    nome: 'jana',
    email: 'jana@jana.com',
    role: 'admin',
    criarCurso: function(){
        console.log('criando curso')
    }
}
Object.setPrototypeOf(admin,user)

admin.criarCurso()
admin.exibirInfos()