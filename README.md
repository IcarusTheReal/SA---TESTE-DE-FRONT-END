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

### Passo 1: Clone o repositório

```bash
git clone [https://github.com/](https://github.com/)[seu-usuario]/testes-e2e-rack-plus.git
cd testes-e2e-rack-plus
Passo 2: Instale as dependências
Bash

npm install cypress --save-dev
Passo 3: Configure a aplicação
Certifique-se que sua aplicação RACK+ está rodando em:

Login: http://127.0.0.1:5500/login/loginhtml.html

Homepage: http://127.0.0.1:5500/homepage/homepagehtml.html

Nota: Ajuste as URLs nos arquivos de teste se necessário.

Passo 4: Execute os testes
Bash

# Modo visual (recomendado para apresentação)
npx cypress open

# Modo linha de comando (headless)
npx cypress run

# Testes específicos (headless)
npx cypress run --spec "TESTE_LOGIN.cy.js"
npx cypress run --spec "TESTE_HOMEPAGE.cy.js"
## Testes que Serão Realizados
### TESTES DA PÁGINA DE LOGIN (TESTE_LOGIN.cy.js)
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

### TESTES DA HOMEPAGE (TESTE_HOMEPAGE.cy.js)
Grupo 1: Estrutura da Página (8 testes)

Carregamento da Página - Verifica título e elementos principais

Barra Lateral Desktop - Testa navegação em telas grandes (6 ícones)

Barra Superior Mobile - Testa navegação em dispositivos móveis

Menu Offcanvas Mobile - Testa menu lateral que abre/fecha

Cabeçalho Desktop - Verifica título "Salas" e ícone de usuário

Campo de Pesquisa Mobile - Testa funcionalidade de busca

Cards das Salas - Verifica grid com 6 salas (1304-1309)

Status das Salas - Testa indicadores visuais (2 vermelhas, 4 verdes)

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
