export class ProductDetailPage{
    elements = {
        AddToCartBtn : ()=> cy.get('#add-to-cart-button'),
        CartBtn : ()=> cy.get('#attach-sidesheet-view-cart-button'),
    
    }

    ClickAddToCart(){
        this.elements.AddToCartBtn().click()
    }

    ClickOpenCart(){
        this.elements.CartBtn().click()
    }
}