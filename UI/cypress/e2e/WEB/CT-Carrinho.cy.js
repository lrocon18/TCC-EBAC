describe('[US-001] - Adicionar item ao carrinho', () => {

    before(() => {
        cy.visit('produtos/')
    });

    it('Deve adicionar 3 produtos ao carrinho', () => {
        cy.adicionaProdutos('M', 'Blue', 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '3')
    });
});