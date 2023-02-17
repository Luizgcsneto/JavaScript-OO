const user = {
    nome: 'luiz',
    email: 'luiz@luiz.com',
    dataNascimento: '1990-02-23',
    role: 'admin',
    exibirInfos: function() {
        console.log(this.nome,this.email)
    }
}

// user.exibirInfos()

const exibir = function(){
    console.log(this.nome)
}

const exibirDois = function(){
    console.log(this.email)
}

const exibirNome = exibir.bind(user)
const exibirEmail = exibirDois.bind(user)
exibirNome()
exibirEmail()
exibir()


const exibirInfos = function(){
    console.log(this.celular,this.timeFutebol)
}
 
function torcedor(celular,timeFutebol) {
    this.celular = celular
    this.timeFutebol = timeFutebol

    this.mostrarInfos = function(){
        console.log(this.celular,this.timeFutebol)
    }
}

const newTorcedor = new torcedor('81981740448','mengão')

newTorcedor.mostrarInfos()

exibirInfos.call(newTorcedor)

function exibeMensagem(nome,email){
    console.log(`Usuário: ${nome} email:${email}`)
}

const titular = {
    nome: 'cezinha',
    email: 'bol@bol.com',
    executaFuncao: function(dados){
        dados.apply(titular,[this.nome,this.email])
    }
}

titular.executaFuncao(exibeMensagem)