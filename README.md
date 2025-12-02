# 🧪 Testes E2E - Sistema RACK+

## 📋 Sobre o Projeto
Repositório contendo testes end-to-end (E2E) automatizados desenvolvidos com **Cypress** para validação das funcionalidades das páginas **Login** e **Homepage** do sistema RACK+.

## 🔗 Link do Repositório
`https://github.com/[seu-usuario]/testes-e2e-rack-plus`

---

## ✅ Checklist de Requisitos Atendidos

### 📋 **REQUISITOS CUMPRIDOS**

- [x] **Repositório com códigos de teste E2E**
- [x] **README com instruções completas de execução**
- [x] **Especificação detalhada dos testes realizados**
- [x] **Roteiro para apresentação ao grupo**
- [x] **Testes para duas páginas da aplicação: Login e Homepage**
- [x] **Nomes específicos e claros dos testes**

---

## 🎯 Páginas Testadas

| Página | Arquivo de Teste | Quantidade de Testes | Status |
|:-------|:-----------------|:---------------------|:-------|
| **Login** | `TESTE_LOGIN.cy.js` | 14 testes | ✅ Implementado |
| **Homepage** | `TESTE_HOMEPAGE.cy.js` | 8 testes | ✅ Implementado |

---

## 🚀 Instruções para Execução

### **Pré-requisitos:**
1. **Node.js** (versão 14 ou superior)
2. **Aplicação RACK+** rodando localmente
3. **Navegador** Chrome, Firefox ou Edge

### **Passo 1: Clone o repositório**
```bash
git clone https://github.com/[seu-usuario]/testes-e2e-rack-plus.git
cd testes-e2e-rack-plus
Passo 2: Instale as dependências
bash
npm install cypress --save-dev
Passo 3: Configure a aplicação
Certifique-se que sua aplicação RACK+ está rodando em:

Login: http://127.0.0.1:5500/login/loginhtml.html

Homepage: http://127.0.0.1:5500/homepage/homepagehtml.html

Nota: Ajuste as URLs nos arquivos de teste se necessário.

Passo 4: Execute os testes
bash
# Modo visual (recomendado para apresentação)
npx cypress open

# Modo linha de comando
npx cypress run

# Testes específicos
npx cypress run --spec "TESTE_LOGIN.cy.js"
npx cypress run --spec "TESTE_HOMEPAGE.cy.js"
🧪 Testes que Serão Realizados
🔐 TESTES DA PÁGINA DE LOGIN (TESTE_LOGIN.cy.js)
Grupo 1: Validação de Credenciais (9 testes)
Login Bem-Sucedido - Verifica login com credenciais válidas

Email Vazio - Testa quando campo email não é preenchido

Senha Vazia - Testa quando campo senha não é preenchido

Ambos Campos Vazios - Testa quando nenhum campo é preenchido

Email Inválido - Testa email com formato incorreto

Senha Muito Curta (3 dígitos) - Testa senha abaixo do mínimo

Senha Curta (7 dígitos) - Testa senha quase no mínimo

Email Não Cadastrado - Testa email que não existe no sistema

Senha Incorreta - Testa senha errada para email válido

Grupo 2: Usabilidade (5 testes)
Mostrar/Esconder Senha - Testa funcionalidade do ícone de olho

Link para Cadastro - Verifica navegação para página de cadastro

Link para Recuperação de Senha - Verifica link funcional

Email com Caracteres Especiais - Testa email válido com caracteres especiais

Email em Maiúsculas - Testa se sistema é case-insensitive

Grupo 3: Responsividade (6 testes)
Funcionamento em Celular Pequeno - Testa em iPhone SE (375x667)

Funcionamento em Tablet - Testa em iPad (768x1024)

Funcionamento em Desktop - Testa em desktop comum (1366x768)

Funcionamento em Tela Grande - Testa em Full HD (1920x1080)

Adaptação Retrato/Paisagem - Testa ambas orientações em mobile

Redimensionamento Dinâmico - Testa adaptação ao mudar tamanho

🏠 TESTES DA HOMEPAGE (TESTE_HOMEPAGE.cy.js)
Grupo 1: Estrutura da Página (8 testes)
Carregamento da Página - Verifica título e elementos principais

Barra Lateral Desktop - Testa navegação em telas grandes (6 ícones)

Barra Superior Mobile - Testa navegação em dispositivos móveis

Menu Offcanvas Mobile - Testa menu lateral que abre/fecha

Cabeçalho Desktop - Verifica título "Salas" e ícone de usuário

Campo de Pesquisa Mobile - Testa funcionalidade de busca

Cards das Salas - Verifica grid com 6 salas (1304-1309)

Status das Salas - Testa indicadores visuais (2 vermelhas, 4 verdes)

📊 Dados para Teste
Credenciais para Login:
javascript
// Login válido (deve funcionar)
Email: leonardo.silva@empresa.com.br
Senha: SenhaSegura@123

// Login inválido (deve falhar)
Email: email-invalido
Senha: 123
🎥 Roteiro para Apresentação
Duração Total: 10-15 minutos
Parte 1: Introdução (2 minutos)
Apresentar o projeto RACK+

Mostrar as páginas testadas (Login e Homepage)

Explicar objetivo dos testes E2E

Parte 2: Configuração e Execução (5 minutos)
Mostrar repositório no GitHub (1 min)

Instalar dependências rapidamente (1 min)

Executar testes de login (2 min)

Executar testes da homepage (1 min)

Parte 3: Demonstração de Testes (5 minutos)
Login bem-sucedido com credenciais válidas

Caso negativo: Email inválido

Funcionalidade: Mostrar/esconder senha

Responsividade: Mobile vs Desktop

Homepage: Cards das salas e status

Parte 4: Resultados e Conclusão (3 minutos)
Mostrar relatório de execução

Explicar cobertura dos testes

Responder perguntas

📁 Estrutura do Projeto
text
testes-e2e-rack-plus/
├── TESTE_LOGIN.cy.js          # 14 testes da página de login
├── TESTE_HOMEPAGE.cy.js       # 8 testes da homepage
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
🐛 Solução de Problemas
Problema: "Cannot connect to the application"
Solução:

bash
# Verifique:
1. A aplicação RACK+ está rodando?
2. Qual porta está usando? (normalmente 5500)
3. Ajuste a URL nos arquivos:
   # Em TESTE_LOGIN.cy.js e TESTE_HOMEPAGE.cy.js
   const LOGIN_URL = 'http://localhost:SUA_PORTA/...'
Problema: "Element not found"
Solução:

bash
# Use o modo visual para inspecionar:
npx cypress open
# Execute o teste falhando e veja qual elemento não é encontrado
Problema: Testes falham sem motivo claro
Solução:

bash
# Execute com mais detalhes:
npx cypress run --headed --browser chrome
# Verifique os logs no terminal
🏁 Status do Projeto
✅ COMPLETO - Todos os requisitos atendidos
📅 Pronto para apresentação
🎯 22 testes implementados

🤝 Contato
Aluno: [Seu Nome]
Email: seu.email@instituicao.edu.br
Instituição: [Nome da Instituição]
Professor: [Nome do Professor]

Desenvolvido para a UC de Testes Automatizados
Data: [Data da Entrega
