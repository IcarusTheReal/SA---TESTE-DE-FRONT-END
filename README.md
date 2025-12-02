# Testes E2E RACK+ 

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

* **Cypress 12.0+** - Framework de testes E2E
* **Node.js** (versão 14 ou superior)
* **Aplicação RACK+** rodando localmente
* Navegador **Chrome**, **Firefox** ou **Edge**

**Passo 1:** Instale as dependências
bash
npm install cypress --save-dev

**Passo 2:** Configure a aplicação
Certifique-se que sua aplicação RACK+ está rodando em:

Login: http://127.0.0.1:5500/login/loginhtml.html

Homepage: http://127.0.0.1:5500/homepage/homepagehtml.html


**Passo 3** Execute os testes
bash
**Modo visual (recomendado para apresentação)**
npx cypress open

**Modo linha de comando**
npx cypress run

**Testes específicos**

npx cypress run --spec "TESTE_LOGIN.cy.js"

npx cypress run --spec "TESTE_HOMEPAGE.cy.js"

##  Testes Realizados

###  Página de Login (login.spec.js)

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
| 15 | Celular pequeno | Funcionamento em iPhone SE |
| 16 | Tablet | Funcionamento em tablets |
| 17 | Desktop | Funcionamento em desktop comum |
| 18 | Tela grande | Funcionamento em Full HD |
| 19 | Retrato e paisagem | Adaptação entre orientações |
| 20 | Redimensionamento | Adaptação ao mudar tamanho |

###  Página Homepage (homepage.spec.js)

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

## Dados de Teste

### Credenciais para Login
javascript
**Credenciais válidas para testes**
Email: leonardo.silva@empresa.com.br
Senha: SenhaSegura@123

// Credenciais para testes negativos
Email inválido: email-invalido
Email não cadastrado: naoexiste@email.com
Senha incorreta: senhaincorreta
Elementos da Homepage Verificados
Barra lateral desktop: 6 ícones (Logo, Pesquisar, Dashboard, Logs, Configurações, Pokémon)

Barra mobile: Menu, Logo, Usuário

Cards das salas: Sala 1304 até Sala 1309

Status: Vermelho (1304, 1309) - Verde (1305, 1306, 1307, 1308)


