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

## 🧪 Testes Realizados

### 🔐 Página de Login

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

| # | Teste | Descrição | Viewport Testado |
| :---: | :--- | :--- | :--- |
| 15 | Celular pequeno | Funcionamento em iPhone SE | 375x667 pixels |
| 16 | Tablet | Funcionamento em tablets | 768x1024 pixels |
| 17 | Desktop | Funcionamento em desktop comum | 1366x768 pixels |
| 18 | Tela grande | Funcionamento em Full HD | 1920x1080 pixels |
| 19 | Retrato e paisagem | Adaptação entre orientações | 375x812 e 812x375 |
| 20 | Redimensionamento | Adaptação ao mudar tamanho | Múltiplos viewports |

### 🏠 Página Homepage (homepage.spec.js)

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



