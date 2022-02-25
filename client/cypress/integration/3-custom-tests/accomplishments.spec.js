/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
    /* `beforeEach` runs before each Test */
    beforeEach(() => {
        cy.visit("/accomplishments");
    });

    it("should showing inappropriate Content Error when Text or Accomplishment includes Word `cat` with Mock", () => {
        /* Intercept the Request to the Server and use instead Mock Data */
        cy.intercept("POST", "http://localhost:4000/accomplishments", (request) => {
            request.reply((response) => {
                response.send({
                    msg: "This Content is not appropriated"
                });
            });
        });
        /* Get Elements and type Information */
        cy.get("placeholder='Title']").type("Walking Accomplishment");
        cy.get("[placeholder='Accomplishment']").type("Walking Accomplishment with a Cat");
        cy.get("[type='checkbox']").click();
        /* Get Button and click it */
        cy.contains("button", "Submit Accomplishment").click();
        /* Get inappropriate Content Error and assert it */
        cy.contains("This Content is not appropriated").should("be.visible");
    });
});
