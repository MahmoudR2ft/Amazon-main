

export class Home{
    elements = {
        SideMenu : ()=> cy.get('#nav-hamburger-menu'),
        Computers : ()=> cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item'),
        ComputersAndTablet : ()=> cy.get('.hmenu-visible > :nth-child(5) > .hmenu-item')
    }

    OpenSideMenu(){
        this.elements.SideMenu().click()
    }

    ClickOnComputers(){
        this.elements.Computers().click()
    }

    ClickOnCompuAndTab(){
        this.elements.ComputersAndTablet().click()

    }
}