export class CartPage{
    elements = {
        validationMessage : ()=> cy.get('.a-size-medium-plus'),
        CartButton : ()=> cy.get('#sw-gtc'),
        DeleteButton : ()=> cy.get('.sc-action-delete > .a-declarative > .a-color-link'),
        DeleteValidationMsg : ()=> cy.get('[data-action="delete"] > .a-size-base')

    }

    AddValidation(){
        this.elements.validationMessage().should('include.text','Added to Cart')
    }

    OpenCart(){
        this.elements.CartButton().click()
    }

    DeleteProduct(){
        this.elements.DeleteButton().click()
    }

    DeleteValidation(){
        this.elements.DeleteValidationMsg().should('include.text','removed from Shopping Cart')
    }


}