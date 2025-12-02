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
Aluno: Leonardo da Silva
Instituição: SENAI CTTI
