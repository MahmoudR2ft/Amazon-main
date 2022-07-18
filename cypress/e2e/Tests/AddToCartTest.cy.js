
import { CartPage } from "../Pages/CartPage";
import { Home } from "../Pages/HomePage";
import { ProductDetailPage } from "../Pages/ProductDetailsPage";
import { SearchPage } from "../Pages/SearchPage";


const home = new Home()
const search = new SearchPage()
const detailsPage = new ProductDetailPage()
const cart = new CartPage()


describe('User Can Add To Cart',()=>{

    before(()=>{
        cy.visit('/')
    }) 

    it('Add To Cart Test',()=>{
        home.OpenSideMenu()
        home.ClickOnComputers()
        home.ClickOnCompuAndTab()
        search.CheckBrand()
        search.ClickOnProduct()
        detailsPage.ClickAddToCart()
        cart.AddValidation()
        cart.OpenCart()
        cart.DeleteProduct()
        cart.DeleteValidation()
        
    })

    after(()=>{
        cy.end()
    })

    



})