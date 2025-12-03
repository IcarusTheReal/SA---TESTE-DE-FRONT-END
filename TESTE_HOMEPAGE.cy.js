// Define a suíte de testes para a página de login do RACK+
describe('Validação da Página de Homepage - RACK+', () => {

  // Define a URL base para navegação
  const LOGIN_URL = 'http://127.0.0.1:5500/homepage/homepagehtml.html'

  // Hook que é executado antes de cada teste
  beforeEach(() => {
    cy.visit(LOGIN_URL)
    cy.intercept('POST', '/login').as('loginRequest') // Se houver chamada API
  })

// --- Teste 1: Estrutura Básica da Página ---
  it('Deve carregar a página homepage com sucesso', () => {
    // Verifica se o título está correto
    cy.title().should('eq', 'RACK+ Homepage')
    
    // Verifica se a barra lateral desktop está presente
    cy.get('.barra-lateral-desktop').should('be.visible')
    
    // Verifica se o conteúdo principal está presente
    cy.get('.conteudo-principal').should('be.visible')
  })

  // --- Teste 2: Barra Lateral Desktop ---
  it('Deve exibir barra lateral corretamente em desktop', () => {
    // Configura viewport desktop
    cy.viewport(1024, 768)
    
    // Verifica se a barra lateral desktop está visível
    cy.get('.barra-lateral-desktop').should('be.visible')
    
    // Verifica todos os ícones da barra lateral
    const iconesDesktop = [
      { seletor: 'img[src*="logo.png"]', alt: 'Logo' },
      { seletor: 'img[src*="icon-lupa.png"]', alt: 'Pesquisar' },
      { seletor: 'img[src*="icon-dashboard.png"]', alt: 'Dashboard' },
      { seletor: 'img[src*="icon-logs.png"]', alt: 'logs' },
      { seletor: 'img[src*="icon-config.png"]', alt: 'Configurações' },
      { seletor: 'img[src*="icon-bulbasaur.png"]', alt: 'pokemon' }
    ]
    
    iconesDesktop.forEach(icone => {
      cy.get(`.barra-lateral-desktop ${icone.seletor}`)
        .should('be.visible')
        .and('have.attr', 'alt', icone.alt)
    })
  })

  // --- Teste 3: Barra Superior Mobile ---
  it('Deve exibir barra superior corretamente em mobile', () => {
    // Configura viewport mobile
    cy.viewport('iphone-x')
    
    // Verifica se a barra superior mobile está visível
    cy.get('nav.d-md-none').should('be.visible')
    
    // Verifica os ícones da barra mobile
    cy.get('nav.d-md-none img[src*="icon-menu.png"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'Menu')
    
    cy.get('nav.d-md-none img[src*="logo.png"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'Logo')
    
    cy.get('nav.d-md-none img[src*="icon-user.png"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'Usuário')
  })

  // --- Teste 4: Menu Mobile ---
  it('Deve abrir e fechar menu no mobile', () => {
    cy.viewport('iphone-x')
    
    // Clica no botão do menu
    cy.get('a[data-bs-toggle="offcanvas"]').click()
    
    // Verifica se o offcanvas abriu
    cy.get('#menuMobile').should('have.class', 'show')
    
    // Verifica ícones dentro do offcanvas
    const iconesOffcanvas = [
      { seletor: 'img[src*="icon-home.png"]', alt: 'Home' },
      { seletor: 'img[src*="icon-dashboard.png"]', alt: 'Dashboard' },
      { seletor: 'img[src*="icon-logs.png"]', alt: 'Documentos' },
      { seletor: 'img[src*="icon-config.png"]', alt: 'Configurações' },
      { seletor: 'img[src*="icon-bulbasaur.png"]', alt: 'pokemon' }
    ]
    
    iconesOffcanvas.forEach(icone => {
      cy.get(`#menuMobile ${icone.seletor}`)
        .should('be.visible')
        .and('have.attr', 'alt', icone.alt)
    })
    
    // Fecha o offcanvas
    cy.get('#menuMobile .btn-close').click()
    cy.get('#menuMobile').should('not.have.class', 'show')
  })

  // --- Teste 5: Cabeçalho Desktop ---
  it('Deve exibir cabeçalho corretamente em desktop', () => {
    cy.viewport(1024, 768)
    
    // Verifica o título
    cy.get('.conteudo-principal h1').should('contain', 'Salas')
    
    // Verifica ícone do usuário no cabeçalho
    cy.get('.conteudo-principal img[src*="icon-user.png"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'Usuário')
  })

  // --- Teste 6: Campo de Pesquisa Mobile ---
  it('Deve exibir campo de pesquisa no mobile', () => {
    cy.viewport('iphone-x')
    
    // Verifica se o campo de pesquisa está visível
    cy.get('form.input-group').should('be.visible')
    
    // Verifica ícone de pesquisa
    cy.get('form.input-group img[src*="icon-lupa.png"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'Pesquisar')
    
    // Verifica placeholder do input
    cy.get('form.input-group input')
      .should('have.attr', 'placeholder', 'PESQUISAR...')
    
    // Testa digitação no campo
    cy.get('form.input-group input')
      .type('Sala 1304')
      .should('have.value', 'Sala 1304')
  })

  // --- Teste 7: Cards das Salas ---
  it('Deve exibir todos os cards das salas', () => {
    // Verifica quantidade de cards
    cy.get('.card').should('have.length', 6)
    
    // Verifica nomes das salas
    const nomesSalas = [
      'Sala 1304',
      'Sala 1305', 
      'Sala 1306',
      'Sala 1307',
      'Sala 1308',
      'Sala 1309'
    ]
    
    nomesSalas.forEach((nome, index) => {
      cy.get('.card').eq(index).within(() => {
        cy.contains('.fw-bold', nome).should('be.visible')
      })
    })
  })

  // --- Teste 8: Status das Salas ---
  it('Deve exibir status corretos nas salas', () => {
    // Verifica salas com status vermelho (danger)
    cy.get('.card').eq(0).within(() => {
      cy.get('.bg-danger').should('be.visible')
    })
    
    cy.get('.card').eq(5).within(() => {
      cy.get('.bg-danger').should('be.visible')
    })
    
    // Verifica salas com status verde (success)
    cy.get('.card').eq(1).within(() => {
      cy.get('.bg-success').should('be.visible')
    })
    
    cy.get('.card').eq(2).within(() => {
      cy.get('.bg-success').should('be.visible')
    })
    
    cy.get('.card').eq(3).within(() => {
      cy.get('.bg-success').should('be.visible')
    })
    
    cy.get('.card').eq(4).within(() => {
      cy.get('.bg-success').should('be.visible')
    })
  })
})
