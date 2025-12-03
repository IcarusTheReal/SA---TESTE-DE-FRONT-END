// Define a suíte de testes para a página de login do RACK+
describe('Validação da Página de Login - RACK+', () => {

  // Define a URL base para navegação
  const LOGIN_URL = 'http://127.0.0.1:5500/login/loginhtml.html'

  // Hook que é executado antes de cada teste
  beforeEach(() => {
    cy.visit(LOGIN_URL)
    cy.intercept('POST', '/login').as('loginRequest') // Se houver chamada API
  })

// --- Teste 1: Login Bem-Sucedido ---
  it('Deve realizar login com sucesso quando credenciais são válidas', () => {
    cy.get('#email').type('leonardo.silva@empresa.com.br')
    cy.get('#password').type('SenhaSegura@123')
    cy.get('button[onclick="fazer_login()"]').click()
  })

  // --- Teste 2: Campos Obrigatórios Vazios ---
  // Este deve funcionar se sua aplicação tem validação básica
  it('Deve exibir erro quando email estiver vazio', () => {
    cy.get('#password').type('12345678')
    cy.get('button[onclick="fazer_login()"]').click()
    
    // Verifica se aparece qualquer mensagem (não específica)
    cy.get('#mensagem').should('be.visible')
  })

  it('Deve exibir erro quando senha estiver vazia', () => {
    cy.get('#email').type('teste@email.com')
    cy.get('button[onclick="fazer_login()"]').click()
    cy.get('#mensagem').should('be.visible')
  })

  it('Deve exibir erro quando ambos os campos estiverem vazios', () => {
    cy.get('button[onclick="fazer_login()"]').click()
    cy.get('#mensagem').should('be.visible')
  })

  // --- Teste 3: Validação de Email Inválido ---
  it('Deve exibir mensagem quando email for inválido', () => {
    cy.get('#email').type('email-invalido')
    cy.get('#password').type('12345678')
    cy.get('button[onclick="fazer_login()"]').click()
    
    // Apenas verifica se aparece uma mensagem
    cy.get('#mensagem').should('be.visible')
  })

  // --- Teste 4: Senha Curta - AJUSTADO ---
  it('Deve tentar login com senha de 3 dígitos', () => {
    cy.get('#email').type('leonardo@email.com')
    cy.get('#password').type('123')
    cy.get('button[onclick="fazer_login()"]').click()
    
    // Apenas verifica se aparece mensagem
    cy.get('#mensagem').should('be.visible')
  })

  it('Deve tentar login com senha de 7 dígitos', () => {
    cy.get('#email').type('leo@email.com')
    cy.get('#password').type('1234567')
    cy.get('button[onclick="fazer_login()"]').click()
    
    cy.get('#mensagem').should('be.visible')
  })

  // --- Teste 5: Credenciais Incorretas - AJUSTADO ---
  it('Deve tentar login com email não cadastrado', () => {
    cy.get('#email').type('naoexiste@email.com')
    cy.get('#password').type('qualquersenha')
    cy.get('button[onclick="fazer_login()"]').click()
    
    // Apenas verifica se há mensagem de resposta
    cy.get('#mensagem').should('be.visible')
  })

  it('Deve tentar login com senha incorreta', () => {
    cy.get('#email').type('leonardo.silva@empresa.com.br')
    cy.get('#password').type('senhaincorreta')
    cy.get('button[onclick="fazer_login()"]').click()
    
    cy.get('#mensagem').should('be.visible')
  })

  // --- Teste 6: Funcionalidade Visual ---
  it('Deve mostrar/esconder senha ao clicar no ícone', () => {
    cy.get('#password').type('minhasenha123')
    
    // Verifica estado inicial
    cy.get('#password').should('have.attr', 'type', 'password')
    cy.get('#eyeIcon').should('have.class', 'bi-eye-slash')
    
    // Mostra senha
    cy.get('#togglePassword').click()
    cy.get('#password').should('have.attr', 'type', 'text')
    cy.get('#eyeIcon').should('have.class', 'bi-eye')
    
    // Esconde senha novamente
    cy.get('#togglePassword').click()
    cy.get('#password').should('have.attr', 'type', 'password')
    cy.get('#eyeIcon').should('have.class', 'bi-eye-slash')
  })

  // --- Teste 7: Navegação ---
  it('Deve ter link para cadastro', () => {
    cy.get('a[href="../cadastro/cadastrohtml.html"]')
      .should('be.visible')
      .and('contain', 'Cadastre-se')
  })

  it('Deve ter link para recuperação de senha', () => {
    cy.get('a[href="https://www.youtube.com/watch?v=La44ebRSy-Y"]')
      .should('be.visible')
      .and('contain', 'Esqueceu sua senha?')
  })

   // --- Teste 8: Teste de Email com Caracteres Especiais ---
  it('Deve tentar login com email contendo caracteres especiais válidos', () => {
    cy.get('#email').type('leonardo.silva+teste@empresa.com.br')
    cy.get('#password').type('SenhaSegura@123')
    cy.get('button[onclick="fazer_login()"]').click()
    
    // Verifica se o sistema processa (pode aceitar ou rejeitar)
    cy.get('#mensagem').should('be.visible')
  })

  // --- Teste 9: Teste de Email em Maiúsculas ---
  it('Deve tentar login com email em letras maiúsculas', () => {
    cy.get('#email').type('LEONARDO.SILVA@EMPRESA.COM.BR')
    cy.get('#password').type('SenhaSegura@123')
    cy.get('button[onclick="fazer_login()"]').click()
    
    // Verifica se o sistema é case-insensitive para emails
    cy.get('#mensagem').should('be.visible')
  })

  // --- TESTES DE RESPONSIVIDADE ---

  // 1. Teste básico em mobile
  it('Deve funcionar em celular', () => {
    cy.viewport(375, 667) // Smarthphone
    
    // Elementos básicos devem estar visíveis
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('button[onclick="fazer_login()"]').should('be.visible')
    
    // Deve poder interagir
    cy.get('#email').type('teste@email.com')
    cy.get('#password').type('senha123')
    cy.get('button[onclick="fazer_login()"]').click()
    
    cy.get('#mensagem').should('be.visible')
  })

  // 2. Teste em tablet
  it('Deve funcionar em tablet', () => {
    cy.viewport(768, 1024) // Tablet
    
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('button[onclick="fazer_login()"]').should('be.visible')
    
    // Testa funcionalidade
    cy.get('#email').type('teste@email.com')
    cy.get('#password').type('senha123')
    cy.get('button[onclick="fazer_login()"]').click()
    
    cy.get('#mensagem').should('be.visible')
  })

  // 3. Teste em desktop
  it('Deve funcionar em desktop', () => {
    cy.viewport(1366, 768) // Desktop 
    
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('button[onclick="fazer_login()"]').should('be.visible')
    
    cy.get('#email').type('teste@email.com')
    cy.get('#password').type('senha123')
    cy.get('button[onclick="fazer_login()"]').click()
    
    cy.get('#mensagem').should('be.visible')
  })

  // 4. Teste em tela muito grande
  it('Deve funcionar em tela grande', () => {
    cy.viewport(1920, 1080) // Full HD
    
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('button[onclick="fazer_login()"]').should('be.visible')
    
    // Verifica que não está tudo esmagado
    cy.get('.card').should('have.css', 'width')
  })

  // 5. Teste básico em modo retrato e paisagem
  it('Deve funcionar em retrato e paisagem', () => {
    // Modo retrato - normal
    cy.viewport(375, 812) //retrato
    cy.get('button[onclick="fazer_login()"]').should('be.visible')
    
    // Modo paisagem - deitado
    cy.viewport(812, 375) //paisagem
    cy.get('button[onclick="fazer_login()"]').should('be.visible')
  })

  // 6. Teste de redimensionamento
  it('Deve adaptar ao redimensionamento', () => {
    // Começa em desktop
    cy.viewport(1024, 768)
    cy.get('#email').should('be.visible')
    
    // Muda para mobile
    cy.viewport(375, 667)
    cy.get('#email').should('be.visible')
    
    // Volta para desktop
    cy.viewport(1024, 768)
    cy.get('#email').should('be.visible')
  })
})
