# 🧪 README - Testes E2E RACK+ (VERSÃO FINAL)

## 📋 Sobre o Projeto
Repositório contendo **testes end-to-end (E2E) automatizados** desenvolvidos com **Cypress** para validação das funcionalidades das páginas **Login** e **Homepage** do sistema RACK+.

## 🔗 Link do Repositório
`https://github.com/[seu-usuario]/testes-e2e-rack-plus`

## 🎯 Páginas Testadas

| Página | Arquivo de Teste | Quantidade de Testes | Status |
| :--- | :--- | :--- | :--- |
| Login | `TESTE_LOGIN.cy.js` | 14 testes | ✅ Implementado |
| Homepage | `TESTE_HOMEPAGE.cy.js` | 8 testes | ✅ Implementado |

---

## 🚀 Instruções para Execução

### Pré-requisitos:
* **Node.js** (versão 14 ou superior)
* **Aplicação RACK+** rodando localmente
* Navegador **Chrome**, **Firefox** ou **Edge**

# 🧪 Testes Implementados

### 🔐 Página de Login

| Grupo | Arquivo | Quantidade de Testes | Status |
| :--- | :--- | :---: | :--- |
| Validação de Login | `TESTE_LOGIN.cy.js` | 9 testes | ✅ Implementado |
| Usabilidade | `TESTE_LOGIN.cy.js` | 5 testes | ✅ Implementado |
| Responsividade | `TESTE_LOGIN.cy.js` | 6 testes | ✅ Implementado |

---

### 🏠 Página Homepage

| Grupo | Arquivo | Quantidade de Testes | Status |
| :--- | :--- | :---: | :--- |
| Estrutura da Página | `TESTE_HOMEPAGE.cy.js` | 8 testes | ✅ Implementado |


mepage)

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

📊 Dados para Demonstração
Credenciais de Teste:
JavaScript

// Login válido (deve funcionar)
Email: leonardo.silva@empresa.com.br
Senha: SenhaSegura@123

// Login inválido (deve falhar)
Email: email-invalido
Senha: 123
Comandos para Apresentação:
Bash

# Para mostrar todos os testes rapidamente
npx cypress run --spec "TESTE_LOGIN.cy.js" --headed --browser chrome
npx cypress run --spec "TESTE_HOMEPAGE.cy.js" --headed --browser chrome
🐛 Solução de Problemas Durante a Apresentação
Se algo der errado:

Aplicação não está rodando: Verifique servidor local

Porta incorreta: Ajuste URLs nos arquivos de teste

Elementos não encontrados: Mostre o HTML da aplicação real

✅ Checklist para o Professor/Avaliador
Repositório com código E2E ✅

README com instruções completas ✅

Testes para duas páginas ✅

Nomes específicos e claros ✅

Roteiro para apresentação ✅

Instruções de execução ✅

Especificação dos testes ✅

Desenvolvido para: UC de Testes Automatizados Aluno: [Seu Nome] Professor: [Nome do Professor] Instituição: [Nome da Instituição] Data: [Data da Entrega]
