export class SearchPage{
    elements = {
        SamsungBrand : ()=> cy.xpath('//body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/span[1]/div[1]/div[1]/div[1]/div[4]/ul[1]/li[1]/span[1]/a[1]/div[1]/label[1]/i[1]'),
        ProductCard : ()=> cy.xpath("//body/div[@id='a-page']/div[@id='search']/div[1]/div[1]/div[1]/span[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]/a[1]/div[1]")
    }

    CheckBrand(){
        this.elements.SamsungBrand().click({force : true})
    }

    ClickOnProduct(){
        this.elements.ProductCard().click()

    }
}
