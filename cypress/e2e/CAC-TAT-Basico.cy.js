describe('template spec', () => {
  
  beforeEach('passes', () => {
    cy.visit('/src/index.html');
  });
  
  it('Retornando Valido Apos Envio Dos Dados Corretos', () => {
    cy.RetornandoValidoAposEnvioDosDadosCorretos()
  });

  it('Retorna erro Fazendo Envio com Sobrenome vazio', ()=>{
    cy.RetornandoErroSobrenomeVazio()
  })

  it('Retorna sucesso após Envio dos Dados Corretos Após selecionar Telefone Obrigatório',()=>{
    cy.RetornandoSucessoAposSelecionarTelefoneObrigatorioEPreencher()
  })
  
  it('Retorna Erro Apos Selecionar Telefone Obrigatorio E Nao Preencher', ()=>{
    cy.RetornaErroAposSelecionarTelefoneObrigatorioENaoPreencher()
  })

  it('Retorna Erro ao Digitar numeros no campo nome', ()=>{
    cy.RetornaErroAoDigitarNumeroNoCampoNome()
    // Esse teste não poderia estar passando. O código deveria ser refatorado.
  })

  it('Retorna Erro ao Digitar numeros no campo SobreNome', ()=>{
    cy.RetornaErroAoDigitarNumeroNoCampoSobreNome()
    // Esse teste não poderia estar passando. O código deveria ser refatorado.
  })

  it('Retorna Erro ao enviar Dados Obrigatórios sem Preencher Email', ()=>{
    cy.RetornaErroAoEnviarDadosObrigatoriosSemEmail()
  })

  it('Retorna Erro ao selecionar telefone obrigatório e Digitar letras', ()=>{
    cy.RetornaErroAoSelecionarTelefoneObrigatorioESelecionarLetras()
  })

  it('Retorna erro ao não preencher caixa de texto', ()=>{
    cy.RetornaErroAoNaoPreencherCaixaDeTexto()
  })

  it('Retorna sucesso Selecionando Diferente tipo de atendimento por Value', ()=>{
    cy.RetornaSucessoSelecionandoTipoDeAtendimentoPorValue()
  })

  it('Retorna sucesso selecionando diferente tipo de atendimento por texto', ()=>{
    cy.RetornaSucessoSelecionandoTipoDeAtendimentoPorTexto()
  })

  it('Retorna sucesso ao preencher os campos obrigatórios e seleciona diferentes tipos de atendimentos',()=>{
    cy.RetornaSucessoAoPreencherOsCamposObrigatoriosESelecionaDiferentesTiposDeAtendimentos()
  })

  it('Retorna Erro ao preencher email com formatação invalida', ()=>{
    cy.RetornaErroAoPreencherEmailComFormatacaoInvalida()
  })

  it('Após mensagem de sucesso, verificar se os dados são excluidos', ()=>{
    cy.RetornandoValidoAposEnvioDosDadosCorretos()
    cy.VerificaSeCamposSaoLimpos()
  })

  it('Retorna Sucesso da em página de política e privacidade', ()=>{
    cy.get('#privacy a ').should('have.attr', 'target', '_blank')
  })

  it("Retorna sucesso ao clicar na página política e privacidade e abrir nova página",()=>{
    cy.get('#privacy a ').click()
  })

  it.only("Retorna Sucesso ao envio de arquivo",()=>{
    cy.get('input[type="file"]#file-upload')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json')
            })
  })
});
