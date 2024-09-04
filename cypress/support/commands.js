Cypress.Commands.add("RetornandoValidoAposEnvioDosDadosCorretos", ()=> {
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".success").should("be.visible")
    cy.tick(3000)
})  

Cypress.Commands.add("RetornandoErroSobrenomeVazio", ()=> {
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".error").should("be.visible")
    cy.tick(3000)
})


Cypress.Commands.add("RetornandoSucessoAposSelecionarTelefoneObrigatorioEPreencher", ()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#phone').type(99999999999).should("have.value",99999999999)
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".success").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaErroAposSelecionarTelefoneObrigatorioENaoPreencher", ()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".error").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaErroAoDigitarNumeroNoCampoNome",()=>{
    cy.clock()
    cy.get('#firstName').type(111111)
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#phone').type(99999999999).should("have.value",99999999999)
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".success").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaErroAoDigitarNumeroNoCampoSobreNome",()=>{
    cy.clock()
    cy.get('#firstName').type(111111)
    cy.get('#lastName').type(222222)
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#phone').type(99999999999).should("have.value",99999999999)
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".success").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaErroAoEnviarDadosObrigatoriosSemEmail",()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".error").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaErroAoSelecionarTelefoneObrigatorioESelecionarLetras",()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get('#phone').type("protechsolutions").should("have.value","")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".error").should("be.visible")
    cy.tick(3000)

})

Cypress.Commands.add("RetornaErroAoNaoPreencherCaixaDeTexto", ()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.contains("Button","Enviar").click()
    cy.get(".error").should("be.visible")
    cy.tick(3000)

})

Cypress.Commands.add("RetornaSucessoSelecionandoTipoDeAtendimentoPorValue",()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get('input[type="radio"][value="feedback"]').check().should("have.value","feedback")
    cy.get('#email-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".success").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaSucessoSelecionandoTipoDeAtendimentoPorTexto",()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get('#support-type > :nth-child(2) > input').check()
    cy.get('#email-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".success").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaSucessoAoPreencherOsCamposObrigatoriosESelecionaDiferentesTiposDeAtendimentos", ()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste@protechsolutions.com.br", {delay:0}).should("have.value","teste@protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get('#email-checkbox').check()
    
    cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".success").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("RetornaErroAoPreencherEmailComFormatacaoInvalida", ()=>{
    cy.clock()
    cy.get('#firstName').type("Protech").should("have.value","Protech")
    cy.get('#lastName').type("Solutions").should("have.value", "Solutions")
    cy.get('#email').type("teste..protechsolutions.com.br", {delay:0}).should("have.value","teste..protechsolutions.com.br")
    cy.get('#product').select(3).should("have.value","mentoria")
    cy.get('#email-checkbox').check()
    const textoProtech = "Protech Solutions é uma empresa inovadora de Tecnologia da Informação dedicada a fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos. Com uma equipe experiente e apaixonada por tecnologia, nós oferecemos serviços personalizados em desenvolvimento de software, suporte técnico e consultoria em TI. Nosso compromisso é transformar desafios tecnológicos em oportunidades de crescimento, garantindo eficiência e sucesso para nossos clientes. Explore nossos serviços e descubra como podemos ajudar a levar sua empresa para o próximo nível!"
    cy.get('#open-text-area').type(textoProtech, {delay: 0})
    cy.contains("Button","Enviar").click()
    cy.get(".error").should("be.visible")
    cy.tick(3000)
})

Cypress.Commands.add("VerificaSeCamposSaoLimpos", ()=>{
    cy.get('#firstName').should("have.value","")
    cy.get('#lastName').should("have.value","")
    cy.get('#email').should("have.value","")
    cy.get('#phone').should("have.value","")
    cy.get('#email-checkbox').should("not.be.checked")
    cy.get('#phone-checkbox').should("not.be.checked")
    cy.get('#open-text-area').should("have.value","")
})