# SA---TESTE-DE-FRONT-END
  Testes E2E - Sistema RACK+
  Sobre o Projeto
Este repositório contém testes end-to-end (E2E) automatizados desenvolvidos com Cypress para validar as funcionalidades das páginas de Login e Cadastro do sistema RACK+. Os testes garantem a qualidade, usabilidade e funcionamento correto das principais funcionalidades do sistema.

 Páginas Testadas
Página de Login (/login/loginhtml.html)

Página de Cadastro (/cadastro/cadastrohtml.html)

Tecnologias Utilizadas
Cypress (versão 12.0+) - Framework de testes E2E

JavaScript - Linguagem de programação

Node.js - Ambiente de execução

Pré-requisitos
Antes de executar os testes, certifique-se de ter instalado:

Node.js (versão 14 ou superior)

A aplicação RACK+ rodando localmente na porta 5500

 Configuração Inicial
1. Instale as dependências
bash
npm install cypress --save-dev
2. Configure a aplicação
Certifique-se que sua aplicação RACK+ está acessível em:

Login: http://127.0.0.1:5500/login/loginhtml.html

Cadastro: http://127.0.0.1:5500/cadastro/cadastrohtml.html

Nota: Se sua aplicação estiver em outra porta, edite os arquivos .spec.js e altere a variável LOGIN_URL ou CADASTRO_URL.

 Como Executar os Testes
Modo Interativo (Recomendado para desenvolvimento)
bash
npx cypress open
Este comando abrirá a interface gráfica do Cypress onde você pode:

Selecionar quais testes executar

Ver a execução em tempo real

Inspecionar elementos da página

Debugar testes facilmente

Modo Headless (Para execução rápida)
bash
# Executar todos os testes
npx cypress run

# Executar apenas testes de login
npx cypress run --spec "cypress/e2e/login.spec.js"

# Executar apenas testes de cadastro
npx cypress run --spec "cypress/e2e/cadastro.spec.js"
 Testes que Serão Realizados
TESTES DA PÁGINA DE LOGIN (login.spec.js)
1. Login Bem-Sucedido
Objetivo: Verificar que o login funciona com credenciais válidas

Dados de teste: Email: leonardo.silva@empresa.com.br, Senha: SenhaSegura@123

Critério de sucesso: Sistema processa o login sem mostrar erros

2. Validação de Campos Obrigatórios
Email vazio: Testa quando apenas a senha é preenchida

Senha vazia: Testa quando apenas o email é preenchido

Ambos vazios: Testa quando nenhum campo é preenchido

Critério de sucesso: Sistema exibe mensagem de erro

3. Validação de Formato de Email
Email inválido: Testa email sem formato correto (ex: email-invalido)

Email com maiúsculas: Testa email em letras maiúsculas

Email com caracteres especiais: Testa email válido com caracteres especiais

Critério de sucesso: Sistema valida o formato do email

4. Credenciais Incorretas
Email não cadastrado: Testa com email que não existe no sistema

Senha incorreta: Testa com senha errada para email válido

Critério de sucesso: Sistema exibe mensagem de credenciais inválidas

5. Funcionalidades Visuais
Mostrar/Esconder Senha: Testa o ícone de olho para visualizar senha

Links de navegação: Verifica links para cadastro e recuperação de senha

Critério de sucesso: Funcionalidades funcionam corretamente

6. Responsividade
Layout em diferentes tamanhos: Testa funcionamento em mobile e desktop

Critério de sucesso: Interface se adapta corretamente

TESTES DA PÁGINA DE CADASTRO (cadastro.spec.js)
1. Cadastro Bem-Sucedido
Objetivo: Verificar que o cadastro funciona com dados válidos

Dados de teste: Nome: Leonardo Silva, Email: leonardo.silva@empresa.com.br, Usuário: leonardo_silva2005, Senha: SenhaSegura@123

Critério de sucesso: Sistema processa o cadastro

2. Validação de Campos Obrigatórios (5 testes individuais)
Nome vazio: Testa quando nome não é preenchido

Email vazio: Testa quando email não é preenchido

Usuário vazio: Testa quando usuário não é preenchido

Senha vazia: Testa quando senha não é preenchida

Confirmação de senha vazia: Testa quando confirmação não é preenchida

Critério de sucesso: Sistema exibe erro para cada campo obrigatório

3. Validação de Email Inválido
Email mal formatado: Testa email sem formato correto

Critério de sucesso: Sistema exibe erro de email inválido

4. Validação de Tamanho da Senha
Senha muito curta (3 dígitos): Testa senha com menos de 8 caracteres

Senha curta (7 dígitos): Testa senha com 7 caracteres (abaixo do mínimo)

Critério de sucesso: Sistema exige senha com pelo menos 8 dígitos

5. Confirmação de Senha
Senhas diferentes: Testa quando senha e confirmação não coincidem

Critério de sucesso: Sistema exige que as senhas sejam iguais

Dados de Teste Utilizados
Para os Testes de Login:
javascript
// Credenciais válidas
Email: leonardo.silva@empresa.com.br
Senha: SenhaSegura@123

// Credenciais inválidas para testes
Email: naoexiste@email.com
Senha: qualquersenha
Para os Testes de Cadastro:
javascript
// Dados válidos para cadastro
Nome: Leonardo Silva
Email: leonardo.silva@empresa.com.br
Usuário: leonardo_silva2005
Senha: SenhaSegura@123
Confirmar Senha: SenhaSegura@123

// Dados inválidos para testes
Email inválido: email-invalido
Senha curta: 123
Senhas diferentes: senha1234 e senha5678
Solução de Problemas Comuns
Se os testes não funcionarem:
"Cannot connect to the application"

bash
# Verifique se a aplicação está rodando
# Ajuste a URL nos arquivos .spec.js:
const LOGIN_URL = 'http://localhost:SUA_PORTA/login/loginhtml.html'
"Element not found"

bash
# Use o Cypress no modo interativo para inspecionar elementos:
npx cypress open
Testes falhando sem motivo aparente

bash
# Execute com mais detalhes:
npx cypress run --headed --browser chrome
📁 Estrutura dos Arquivos de Teste
text
📁 cypress/
├── 📁 e2e/
│   ├── login.spec.js          # 12 testes da página de login
│   └── cadastro.spec.js       # 10 testes da página de cadastro
├── 📁 fixtures/               # Dados estáticos (opcional)
└── 📁 support/                # Comandos customizados (opcional)

Tempo de Execução Estimado
Testes de Login: ~30-45 segundos

Testes de Cadastro: ~20-30 segundos

Total: ~50-75 segundos para todos os testes

Critérios de Avaliação dos Testes
Para Cada Teste Individual:
Executa sem erros técnicos

Verifica um comportamento específico

Tem critério de sucesso claro

É independente de outros testes

Limpa o estado após execução

Para o Conjunto de Testes:
 Cobre fluxos principais do usuário

✅ Inclui casos positivos e negativos

✅ Testa validações de formulário

✅ Verifica mensagens de erro

✅ Documentação clara para execução

Para a Apresentação
Passo a Passo para Demonstrar:
bash
# 1. Certifique-se que a aplicação RACK+ está rodando

# 2. Execute os testes de login:
npx cypress run --spec "cypress/e2e/login.spec.js" --headed

# 3. Execute os testes de cadastro:
npx cypress run --spec "cypress/e2e/cadastro.spec.js" --headed

# OU execute todos de uma vez:
npx cypress run --headed
Durante a Apresentação Mostre:
Configuração (1 minuto): Como configurar o ambiente

Execução (3 minutos): Rodando os testes

Resultados (2 minutos): Análise dos relatórios

Cenários Testados (4 minutos): Explicação dos casos de teste

Desenvolvido para avaliação da UC de Testes Automatizados
Aluno: Leonardo da Silva
Instituição: SENAI CTTI
