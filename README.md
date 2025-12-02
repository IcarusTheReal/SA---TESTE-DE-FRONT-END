# SA---TESTE-DE-FRONT-END
 🧪 Testes E2E - Sistema RACK+
📋 Sobre o Projeto
Testes end-to-end (E2E) automatizados para as páginas de Login e Homepage do sistema RACK+. Desenvolvidos com Cypress para garantir qualidade, usabilidade e funcionamento correto das funcionalidades principais.

🎯 Páginas Testadas
Página	URL Local	Quantidade de Testes
Login	http://127.0.0.1:5500/login/loginhtml.html	14 testes
Homepage	http://127.0.0.1:5500/homepage/homepagehtml.html	8 testes
🚀 Tecnologias Utilizadas
Cypress 12.0+ - Framework de testes E2E

JavaScript - Linguagem de programação

Bootstrap 5 - Framework CSS testado

Node.js - Ambiente de execução

⚙️ Pré-requisitos
Antes de executar os testes, você precisa ter:

Node.js versão 14 ou superior instalado

Aplicação RACK+ rodando localmente

Navegador Chrome, Firefox ou Edge instalado

📥 Instalação Rápida
1. Instale o Cypress
bash
# No diretório do seu projeto
npm install cypress --save-dev
2. Configure as URLs
Verifique se sua aplicação está acessível nas URLs padrão:

Login: http://127.0.0.1:5500/login/loginhtml.html

Homepage: http://127.0.0.1:5500/homepage/homepagehtml.html

Nota: Se sua aplicação usar outra porta, ajuste as constantes LOGIN_URL nos arquivos de teste.

▶️ Como Executar os Testes
Modo Interativo (Recomendado)
bash
# Abre a interface gráfica do Cypress
npx cypress open
Na interface:

Clique em "E2E Testing"

Escolha um navegador

Clique em "Start E2E Testing"

Selecione o arquivo de teste desejado

Modo Headless (Linha de Comando)
bash
# Executa todos os testes
npx cypress run

# Executa apenas testes de login
npx cypress run --spec "cypress/e2e/login.spec.js"

# Executa apenas testes da homepage
npx cypress run --spec "cypress/e2e/homepage.spec.js"

# Executa com navegador visível
npx cypress run --headed
🧪 Testes Realizados
🔐 Página de Login (login.spec.js)
Testes de Funcionalidade (9 testes)
#	Teste	Descrição	Critério de Sucesso
1	Login bem-sucedido	Login com credenciais válidas	Sistema processa o login
2	Email vazio	Campo email não preenchido	Exibe mensagem de erro
3	Senha vazia	Campo senha não preenchido	Exibe mensagem de erro
4	Ambos vazios	Nenhum campo preenchido	Exibe mensagem de erro
5	Email inválido	Email sem formato correto	Exibe mensagem de erro
6	Senha curta (3 dígitos)	Senha com apenas 3 caracteres	Exibe mensagem de erro
7	Senha curta (7 dígitos)	Senha com 7 caracteres	Exibe mensagem de erro
8	Email não cadastrado	Email inexistente no sistema	Exibe mensagem de erro
9	Senha incorreta	Senha errada para email válido	Exibe mensagem de erro
Testes de Usabilidade (5 testes)
#	Teste	Descrição	Critério de Sucesso
10	Mostrar/esconder senha	Funcionalidade do ícone de olho	Alterna entre mostrar/esconder
11	Link para cadastro	Navegação para página de cadastro	Link visível e funcional
12	Link recuperação de senha	Link "Esqueceu sua senha?"	Link visível e funcional
13	Email com caracteres especiais	Email válido com caracteres especiais	Sistema processa corretamente
14	Email em maiúsculas	Email em LETRAS MAIÚSCULAS	Sistema processa (case-insensitive)
Testes de Responsividade (6 testes)
#	Teste	Descrição	Viewport Testado
15	Celular pequeno	Funcionamento em iPhone SE	375x667 pixels
16	Tablet	Funcionamento em tablets	768x1024 pixels
17	Desktop	Funcionamento em desktop comum	1366x768 pixels
18	Tela grande	Funcionamento em Full HD	1920x1080 pixels
19	Retrato e paisagem	Adaptação entre orientações	375x812 e 812x375
20	Redimensionamento	Adaptação ao mudar tamanho	Múltiplos viewports
🏠 Página Homepage (homepage.spec.js)
Testes de Estrutura (8 testes)
#	Teste	Descrição	Elementos Verificados
1	Carregamento da página	Verifica estrutura básica	Título, barra lateral, conteúdo
2	Barra lateral desktop	Navegação em telas grandes	6 ícones com textos alternativos
3	Barra superior mobile	Navegação em dispositivos móveis	3 ícones principais
4	Menu offcanvas mobile	Menu lateral mobile	5 ícones e funcionalidade de abrir/fechar
5	Cabeçalho desktop	Área superior em desktop	Título "Salas" e ícone de usuário
6	Campo de pesquisa mobile	Funcionalidade de busca em mobile	Input e ícone de lupa
7	Cards das salas	Grid de salas disponíveis	6 salas numeradas (1304-1309)
8	Status das salas	Indicadores visuais de status	2 vermelhas (problema) e 4 verdes (OK)
📊 Dados de Teste
Credenciais para Login
javascript
// Credenciais válidas para testes
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

🐛 Solução de Problemas Comuns
Problema 1: "Cannot connect to the application"
Solução:

bash
# 1. Verifique se a aplicação RACK+ está rodando
# 2. Confirme a porta (normalmente 5500)
# 3. Ajuste a URL no arquivo de teste:
const LOGIN_URL = 'http://localhost:SUA_PORTA/login/loginhtml.html'
Problema 2: "Element not found"
Solução:

bash
# Use o modo interativo para inspecionar elementos
npx cypress open
# Clique no teste falho para ver qual elemento não está sendo encontrado
Problema 3: Testes falhando sem motivo aparente
Solução:

bash
# Execute com mais detalhes
npx cypress run --headed --browser chrome
# Verifique os logs no terminal
📁 Estrutura dos Arquivos
text
📁 cypress/
├── 📁 e2e/
│   ├── login.spec.js          # 14 testes da página de login
│   └── homepage.spec.js       # 8 testes da página inicial
├── 📁 fixtures/               # Dados estáticos (opcional)
└── 📁 support/                # Comandos customizados (opcional)
🕐 Tempo de Execução Estimado
Testes de Login: ~60 segundos

Testes da Homepage: ~30 segundos

Total: ~90 segundos para todos os testes

✅ Critérios de Sucesso
Para Cada Teste Individual:
✅ Executa sem erros técnicos

✅ Verifica comportamento específico da aplicação

✅ Tem assertivas claras

✅ É independente de outros testes

✅ Limpa o estado após execução

Para o Conjunto de Testes:
✅ Cobre fluxos principais do usuário

✅ Inclui casos positivos e negativos

✅ Testa responsividade em diferentes dispositivos

✅ Verifica elementos visuais e funcionais

✅ Documentação clara para execução

🎥 Para a Apresentação
Script de Demonstração:
bash
# 1. Certifique-se que a aplicação está rodando

# 2. Execute os testes de login (com navegador visível)
npx cypress run --spec "cypress/e2e/login.spec.js" --headed

# 3. Execute os testes da homepage
npx cypress run --spec "cypress/e2e/homepage.spec.js" --headed

# 4. Mostre os resultados no terminal
Pontos para Destacar na Apresentação:
Configuração simples (1 minuto)

Execução dos testes (3 minutos)

Análise dos resultados (2 minutos)

Cenários testados (4 minutos)

Desenvolvido para avaliação da UC de Testes Automatizados
Aluno: [Seu Nome Aqui]
Instituição: [Nome da Instituição]

O nome dos teste é 

TESTE_LOGIN.cy
TESTE_HOMEPAGE.cy
🧪 Testes E2E - Sistema RACK+
📋 Sobre o Projeto
Testes end-to-end (E2E) automatizados para as páginas de Login e Homepage do sistema RACK+. Desenvolvidos com Cypress para validar funcionalidades, usabilidade e responsividade.

🎯 Páginas Testadas
Página	Arquivo de Teste	Quantidade de Testes	Tempo de Execução
Login	TESTE_LOGIN.cy.js	14 testes	~60 segundos
Homepage	TESTE_HOMEPAGE.cy.js	8 testes	~30 segundos
🚀 Tecnologias Utilizadas
Cypress 12.0+ - Framework de testes E2E

JavaScript - Linguagem dos testes

Bootstrap 5 - Framework CSS testado

Node.js - Ambiente de execução

⚙️ Pré-requisitos
Antes de executar, certifique-se de ter:

Node.js versão 14 ou superior

Aplicação RACK+ rodando localmente

Navegador (Chrome, Firefox ou Edge)

📥 Instalação Rápida
1. Instale as dependências
bash
# No diretório do projeto
npm install cypress --save-dev
2. Configure as URLs da aplicação
Verifique se sua aplicação está acessível:

Login: http://127.0.0.1:5500/login/loginhtml.html

Homepage: http://127.0.0.1:5500/homepage/homepagehtml.html

Importante: Se usar porta diferente de 5500, edite os arquivos TESTE_LOGIN.cy.js e TESTE_HOMEPAGE.cy.js ajustando as constantes LOGIN_URL.

▶️ Como Executar os Testes
Execução Individual (Recomendado para desenvolvimento)
bash
# Testes de Login
npx cypress run --spec "TESTE_LOGIN.cy.js"

# Testes da Homepage
npx cypress run --spec "TESTE_HOMEPAGE.cy.js"
Execução Completa
bash
# Todos os testes de uma vez
npx cypress run
Modo Visual (Para debug e apresentação)
bash
# Abre a interface gráfica do Cypress
npx cypress open

# Ou execute com navegador visível
npx cypress run --headed --browser chrome
🧪 Testes Implementados
🔐 Testes da Página de Login (TESTE_LOGIN.cy.js)
Grupo 1: Validação de Login (9 testes)
#	Descrição	Comportamento Esperado
1	Login com credenciais válidas	Sistema processa sem erros
2	Email vazio (senha preenchida)	Exibe mensagem de erro
3	Senha vazia (email preenchido)	Exibe mensagem de erro
4	Ambos os campos vazios	Exibe mensagem de erro
5	Email com formato inválido	Exibe mensagem de erro
6	Senha muito curta (3 dígitos)	Exibe mensagem de erro
7	Senha curta (7 dígitos)	Exibe mensagem de erro
8	Email não cadastrado	Exibe erro de credenciais
9	Senha incorreta para email válido	Exibe erro de credenciais
Grupo 2: Usabilidade (5 testes)
#	Código do Teste	Descrição	Comportamento Esperado
10	Funcionalidade mostrar/esconder senha	Alterna entre type="text" e type="password"
11	Link para página de cadastro	Link visível e clicável
12	Link para recuperação de senha	Link visível e aponta para URL correta
13	Email com caracteres especiais válidos	Sistema aceita ou rejeita apropriadamente
14	Email em letras maiúsculas	Sistema processa (case-insensitive)
Grupo 3: Responsividade (6 testes)
#	Código do Teste	Descrição	Dispositivo Testado
15	Funcionamento em celular pequeno	iPhone SE (375x667)
16	Funcionamento em tablet	iPad (768x1024)
17	Funcionamento em desktop	Desktop (1366x768)
18	Funcionamento em tela grande	Full HD (1920x1080)
19	Adaptação retrato/paisagem	Mobile ambas orientações
20	Redimensionamento dinâmico	Múltiplos tamanhos
🏠 Testes da Homepage (TESTE_HOMEPAGE.cy.js)
Grupo 1: Estrutura Básica (8 testes)
#	Código do Teste	Descrição	Elementos Verificados
1	Carregamento completo da página	Título, barra lateral, conteúdo principal
2	Barra lateral desktop	6 ícones com atributos alt corretos
3	Barra superior mobile	3 ícones (menu, logo, usuário)
4	Menu offcanvas mobile	Abre/fecha e mostra 5 ícones internos
5	Cabeçalho desktop	Título "Salas" e ícone de usuário
6	Campo de pesquisa mobile	Input funcionando com placeholder correto
7	Cards das salas	6 salas numeradas de 1304 a 1309
8	Status indicadores	2 salas vermelhas, 4 salas verdes
📊 Dados de Teste Utilizados
Para os Testes de Login:
javascript
// Credenciais válidas (deve funcionar)
Email: leonardo.silva@empresa.com.br
Senha: SenhaSegura@123

// Dados para testes negativos (devem falhar)
Email inválido: "email-invalido"
Email não cadastrado: "naoexiste@email.com"
Senha incorreta: "senhaincorreta"
Senha curta: "123" (3 dígitos) e "1234567" (7 dígitos)
Para os Testes da Homepage:
javascript
// Elementos verificados:
- Título da página: "RACK+ Homepage"
- Salas: 1304, 1305, 1306, 1307, 1308, 1309
- Status: Sala 1304 (vermelho), Sala 1309 (vermelho)
- Status: Sala 1305-1308 (verde)
- Ícones: Logo, Pesquisar, Dashboard, Logs, Configurações, Pokémon
🐛 Solução de Problemas
Se os testes não funcionarem:
Problema: "Cannot connect to the application"

bash
# Verifique:
1. A aplicação RACK+ está rodando?
2. Qual porta está usando? (normalmente 5500)
3. Ajuste a URL nos arquivos:
   # Em TESTE_LOGIN.cy.js e TESTE_HOMEPAGE.cy.js
   const LOGIN_URL = 'http://localhost:SUA_PORTA/...'
Problema: "Element not found"

bash
# Use o modo visual para inspecionar:
npx cypress open
# Execute o teste falhando e veja qual elemento não é encontrado
Problema: Testes falham sem motivo claro

bash
# Execute com mais detalhes:
npx cypress run --headed --browser chrome
# Verifique os logs no terminal
📁 Estrutura dos Arquivos
text
📁 seu-repositorio/
├── TESTE_LOGIN.cy.js          # 14 testes da página de login
├── TESTE_HOMEPAGE.cy.js       # 8 testes da página inicial
├── cypress.config.js          # Configuração do Cypress (opcional)
└── package.json              # Dependências do projeto
✅ Critérios de Avaliação
Para Cada Teste:
Executa sem erros técnicos

Testa um comportamento específico

Tem critério de sucesso claro

É independente de outros testes

Documentado no README

Para o Conjunto:
Cobre fluxos principais do usuário

Inclui casos positivos e negativos

Testa responsividade

Verifica elementos visuais

Instruções claras de execução

🎥 Para a Apresentação
Script de Demonstração Rápido:
bash
# 1. Certifique-se que a aplicação RACK+ está rodando

# 2. Execute testes de login (com navegador visível)
npx cypress run --spec "TESTE_LOGIN.cy.js" --headed

# 3. Execute testes da homepage
npx cypress run --spec "TESTE_HOMEPAGE.cy.js" --headed
O que Mostrar (10 minutos):
Introdução (1 min): O que são os testes e o que validam

Configuração (1 min): Como configurar o ambiente

Execução (3 min): Rodando os testes

Resultados (2 min): Análise dos relatórios

Testes específicos (3 min): Mostrar alguns cenários interessantes

Desenvolvido para avaliação da UC de Testes Automatizados
Aluno: Leonardo da Silva
Instituição: SENAI CTTI
