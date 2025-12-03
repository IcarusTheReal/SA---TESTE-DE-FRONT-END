# Testes E2E RACK+ 

##  Sobre o Projeto
Repositório com **testes end-to-end (E2E) automatizados**, desenvolvidos em Cypress, para garantir o correto funcionamento, a usabilidade e a responsividade das páginas de **Login** e **Homepage** do sistema RACK+.


##  Instruções para Execução

### Pré-requisitos:

* **Cypress 12.0+** - Framework de testes E2E
* **Node.js** (versão 14 ou superior)
* **Aplicação RACK+** rodando localmente
* Navegador **Chrome**, **Firefox** ou **Edge**

## Configuração e Execução dos Testes

* ### Passo 1: Instale as dependências

  npm install cypress --save-dev

* ### Passo 2: Configure a aplicação
  Certifique-se de que sua aplicação RACK+ está rodando localmente e acessível pelo endereço correto, como http://127.0.0.1:5500/. Ajuste a URL nos arquivos de teste caso     esteja usando uma porta diferente.

* ### Passo 3 Execute os testes

  **Modo visual (recomendado para apresentação)**

  npx cypress open

  **Modo linha de comando**

  npx cypress run

  **Testes específicos**

  npx cypress run --spec "TESTE_LOGIN.cy.js"

  npx cypress run --spec "TESTE_HOMEPAGE.cy.js"

##  Páginas Testadas

| Página | Arquivo de Teste | Quantidade de Testes | Status |
| :--- | :--- | :--- | :--- |
| Login | `TESTE_LOGIN.cy.js` | 20 testes | ✅ Implementado |
| Homepage | `TESTE_HOMEPAGE.cy.js` | 8 testes | ✅ Implementado |


##  Testes Realizados

###  Página de Login

#### Testes de Funcionalidade (9 testes)

| # | Teste | Descrição |
| :---: | :--- | :--- |
| 1 | Login bem-sucedido | Login com credenciais válidas |
| 2 | Email vazio | Campo email não preenchido |
| 3 | Senha vazia | Campo senha não preenchido |
| 4 | Ambos vazios | Nenhum campo preenchido |
| 5 | Email inválido | Email sem formato correto |
| 6 | Senha curta (3 dígitos) | Senha com apenas 3 caracteres |
| 7 | Senha curta (7 dígitos) | Senha com 7 caracteres |
| 8 | Email não cadastrado | Email inexistente no sistema |
| 9 | Senha incorreta | Senha errada para email válido |

#### Testes de Usabilidade (5 testes)

| # | Teste | Descrição |
| :---: | :--- | :--- |
| 10 | Mostrar/esconder senha | Funcionalidade do ícone de olho |
| 11 | Link para cadastro | Navegação para página de cadastro |
| 12 | Link recuperação de senha | Link "Esqueceu sua senha?" |
| 13 | Email com caracteres especiais | Email válido com caracteres especiais |
| 14 | Email em maiúsculas | Email em LETRAS MAIÚSCULAS |

#### Testes de Responsividade (6 testes)

| # | Teste | Descrição |
| :---: | :--- | :--- |
| 15 | Celular pequeno | Funcionamento em Smartphone |
| 16 | Tablet | Funcionamento em tablets |
| 17 | Desktop | Funcionamento em desktop  |
| 18 | Tela grande | Funcionamento em Full HD |
| 19 | Retrato e paisagem | Adaptação entre orientações |
| 20 | Redimensionamento | Adaptação ao mudar tamanho |

###  Página Homepage

#### Testes de Estrutura (8 testes)

| # | Teste | Descrição |
| :---: | :--- | :--- |
| 1 | Carregamento da página | Verifica estrutura básica |
| 2 | Barra lateral desktop | Navegação em telas grandes |
| 3 | Barra superior mobile | Navegação em dispositivos móveis |
| 4 | Menu offcanvas mobile | Menu lateral mobile |
| 5 | Cabeçalho desktop | Área superior em desktop |
| 6 | Campo de pesquisa mobile | Funcionalidade de busca em mobile |
| 7 | Cards das salas | Grid de salas disponíveis |
| 8 | Status das salas | Indicadores visuais de status |

## Desenvolvido para avaliação da SA de Teste de Front-end

**Aluno:** Leonardo Silva

**Instituição** Senai CTTI




