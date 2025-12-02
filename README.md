#  README - Testes E2E RACK+ (VERSÃO FINAL)

##  Sobre o Projeto
Repositório contendo **testes end-to-end (E2E) automatizados** desenvolvidos com **Cypress** para validação das funcionalidades das páginas **Login** e **Homepage** do sistema RACK+.

##  Link do Repositório
`https://github.com/[seu-usuario]/testes-e2e-rack-plus`

##  Páginas Testadas

| Página | Arquivo de Teste | Quantidade de Testes | Status |
| :--- | :--- | :--- | :--- |
| Login | `TESTE_LOGIN.cy.js` | 14 testes | ✅ Implementado |
| Homepage | `TESTE_HOMEPAGE.cy.js` | 8 testes | ✅ Implementado |

---

##  Instruções para Execução

### Pré-requisitos:
* **Node.js** (versão 14 ou superior)
* **Aplicação RACK+** rodando localmente
* Navegador **Chrome**, **Firefox** ou **Edge**

##  Testes Realizados

###  Página de Login (login.spec.js)

#### Testes de Funcionalidade (9 testes)

| # | Teste | Descrição | Critério de Sucesso |
| :---: | :--- | :--- | :--- |
| 1 | Login bem-sucedido | Login com credenciais válidas | Sistema processa o login |
| 2 | Email vazio | Campo email não preenchido | Exibe mensagem de erro |
| 3 | Senha vazia | Campo senha não preenchido | Exibe mensagem de erro |
| 4 | Ambos vazios | Nenhum campo preenchido | Exibe mensagem de erro |
| 5 | Email inválido | Email sem formato correto | Exibe mensagem de erro |
| 6 | Senha curta (3 dígitos) | Senha com apenas 3 caracteres | Exibe mensagem de erro |
| 7 | Senha curta (7 dígitos) | Senha com 7 caracteres | Exibe mensagem de erro |
| 8 | Email não cadastrado | Email inexistente no sistema | Exibe mensagem de erro |
| 9 | Senha incorreta | Senha errada para email válido | Exibe mensagem de erro |

#### Testes de Usabilidade (5 testes)

| # | Teste | Descrição | Critério de Sucesso |
| :---: | :--- | :--- | :--- |
| 10 | Mostrar/esconder senha | Funcionalidade do ícone de olho | Alterna entre mostrar/esconder |
| 11 | Link para cadastro | Navegação para página de cadastro | Link visível e funcional |
| 12 | Link recuperação de senha | Link "Esqueceu sua senha?" | Link visível e funcional |
| 13 | Email com caracteres especiais | Email válido com caracteres especiais | Sistema processa corretamente |
| 14 | Email em maiúsculas | Email em LETRAS MAIÚSCULAS | Sistema processa (case-insensitive) |

#### Testes de Responsividade (6 testes)

| # | Teste | Descrição | Viewport Testado |
| :---: | :--- | :--- | :--- |
| 15 | Celular pequeno | Funcionamento em iPhone SE | 375x667 pixels |
| 16 | Tablet | Funcionamento em tablets | 768x1024 pixels |
| 17 | Desktop | Funcionamento em desktop comum | 1366x768 pixels |
| 18 | Tela grande | Funcionamento em Full HD | 1920x1080 pixels |
| 19 | Retrato e paisagem | Adaptação entre orientações | 375x812 e 812x375 |
| 20 | Redimensionamento | Adaptação ao mudar tamanho | Múltiplos viewports |

###  Página Homepage (homepage.spec.js)

#### Testes de Estrutura (8 testes)

| # | Teste | Descrição | Elementos Verificados |
| :---: | :--- | :--- | :--- |
| 1 | Carregamento da página | Verifica estrutura básica | Título, barra lateral, conteúdo |
| 2 | Barra lateral desktop | Navegação em telas grandes | 6 ícones com textos alternativos |
| 3 | Barra superior mobile | Navegação em dispositivos móveis | 3 ícones principais |
| 4 | Menu offcanvas mobile | Menu lateral mobile | 5 ícones e funcionalidade de abrir/fechar |
| 5 | Cabeçalho desktop | Área superior em desktop | Título "Salas" e ícone de usuário |
| 6 | Campo de pesquisa mobile | Funcionalidade de busca em mobile | Input e ícone de lupa |
| 7 | Cards das salas | Grid de salas disponíveis | 6 salas numeradas (1304-1309) |
| 8 | Status das salas | Indicadores visuais de status | 2 vermelhas (problema) e 4 verdes (OK) |



