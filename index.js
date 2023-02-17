import User from './User.js'
import Docente from './Docente.js'
import Admin from './Admin.js'


const novoAdmin = new Admin('luiz Gonzaga da costa souza neto','luizgonzaga15@gmail.com','1990-02-23')

novoAdmin.nome = 'gonzaga'
console.log(novoAdmin.nome)
console.log(novoAdmin.exibirInfo())

