# SPS REACT TEST

- Criar um CRUD de usuários

# Regras

- Criar a página de signIn para fazer a autenticação do usuário (Usar o usuário previamente cadastrado para validar)
- Pode usar qualquer tipo de storage para guardar o token
- Só será possível cadastrar e/ou visualizar os usuários se estiver autenticado
- Chamar a API que foi criada anteriormente (test-sps-server)

## Como executar

### 📂 1. Acesse a pasta da API
`cd SPS-Front`

### 📦 2. Instale as dependências
`npm install`

### ▶️ 4. Rodar o projeto

`npm run dev`

A aplicação abrirá em http://localhost:3001

## Como usar

Ao entrar em http://localhost:3001 você será redirecionado para:
`/login`

### Credencial préviamente cadastrada:

```
Email: admin@spsgroup.com.br

Senha: 1234
```

Ao logar vocÊ será redirecionado para a Home onde podemos seguir para:

* Active Users

* Create User

* Logout

## Active Users (Apenas Admin)

Aqui o admin pode ver todos os usuários cadastrados na plataforma, edita-los ou deleta-los.

## Edit (Apenas Admin)

A tela de edição de usuários carrega os dados do usuario escolhido na `active users` e dá a liberdade para o admin modificar seus dados com excessão da senha.

## Create User (Apenas Admin)

Uma tela praticamente identica a de edição de usuário porém com o campo de cadastro de senha.

 
