let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let address = document.querySelector('#address')
let labelAddress = document.querySelector('#labelAddress')
let validAddress = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let date = document.querySelector('#date')
let labelDate = document.querySelector('#labelDate')
let validDate = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false


let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', ()=>{
  if(nome.value.length <= 7){ 
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome * Insira nome e sobrenome completo.'
    let validNome = false
  } else{
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    validNome = true
  }
})

email.addEventListener('keyup', ()=>{
  if(email.value.length <= 8){ 
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email * Insira um email válido.'
    validEmail = false
  } else{
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    validEmail = true
  }
})

usuario.addEventListener('keyup', ()=>{
  if(usuario.value.length <= 4){ 
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário * Insira no mínimo 5 caracteres.'
    validUsuario = false
  } else{
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    validUsuario = true
  }
})

telefone.addEventListener('keyup', ()=>{
  if(telefone.value.length <= 8){ 
    labelTelefone.setAttribute('style', 'color: red')
    labelTelefone.innerHTML = 'Telefone * Insira um número de telefone válido.'
    validTelefone = false
  } else{
    labelTelefone.setAttribute('style', 'color: green')
    labelTelefone.innerHTML = 'Telefone'
    validTelefone = true
  }
})

cpf.addEventListener('keyup', ()=>{
  if(cpf.value.length <= 10){ 
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'CPF * Insira um número de CPF válido.'
    validCpf = false
  } else{
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'CPF'
    validCpf = true
  }
})

address.addEventListener('keyup', ()=>{
  if(address.value.length <= 19){ 
    labelAddress.setAttribute('style', 'color: red')
    labelAddress.innerHTML = 'Endereço Completo * Insira um endereço válido.'
    validAddress = false
  } else{
    labelAddress.setAttribute('style', 'color: green')
    labelAddress.innerHTML = 'Endereço Completo'
    validAddress = true
  }
})

cep.addEventListener('keyup', ()=>{
  if(cep.value.length <= 7){ 
    labelCep.setAttribute('style', 'color: red')
    labelCep.innerHTML = 'CEP * Insira um CEP válido.'
    validCep = false
  } else{
    labelCep.setAttribute('style', 'color: green')
    labelCep.innerHTML = 'CEP'
    validCep = true
  }
})

date.addEventListener('keyup', ()=>{
  if(date.value.length <= 7){ 
    labelDate.setAttribute('style', 'color: red')
    labelDate.innerHTML = 'Data de Nascimento * Insira uma data válida.'
    validDate = false
  } else{
    labelDate.setAttribute('style', 'color: green')
    labelDate.innerHTML = 'Data de Nascimento '
    validDate = true
  }
})

senha.addEventListener('keyup', ()=>{
  if(senha.value.length <= 11){ 
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha * Insira no mínimo 12 caracteres.'
    validSenha = false
  } else{
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', ()=>{
  if(senha.value != confirmSenha.value){ 
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha * As senhas não conferem.'
    validConfirmSenha = false
  } else{
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    validConfirmSenha = true
  }
})


function cadastrar(){
  if(validNome && validEmail && validUsuario && validTelefone && validCpf && validAddress && validCep && validDate && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]' )
    
    listaUser.push({
      nomeCad: nome.value,
      emailCad: email.value,
      userCad: usuario.value,
      telCad: telefone.value,
      cpfCad: cpf.value,
      addressCad: address.value,
      cepCad: cep.value,
      dateCad: date.value,
      senhaCad: senha.value
    })
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    msgSuccess.setAttribute('style', 'display:block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display:none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
      window.location.href = 'https://cdpn.io/tiagodev21solado/debug/RwVrXjp/yoAZEpvZpbJr'
    }, 3000)
    
  } else{
    msgError.setAttribute('style', 'display:block')
    msgError.innerHTML = '<strong>Verifique e preencha todos os campos corretamente!</strong>'
    msgSuccess.setAttribute('style', 'display:none')
    msgSuccess.innerHTML = ''
  }
}



btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else{
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else{
    inputConfirmSenha.setAttribute('type', 'password')
  }
})