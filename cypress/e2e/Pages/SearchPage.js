export class SearchPage{
    elements = {
        SamsungBrand : ()=> cy.xpath('//body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/span[1]/div[1]/div[1]/div[1]/div[4]/ul[1]/li[1]/span[1]/a[1]/div[1]/label[1]/i[1]'),
        ProductCard : ()=> cy.xpath("[data-asin="B09N41RC6L"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus")
    }

    CheckBrand(){
        this.elements.SamsungBrand().click({force : true})
    }

    ClickOnProduct(){
        this.elements.ProductCard().click()

    }
}
