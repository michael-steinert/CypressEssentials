/// <reference types="cypress" />

describe("Accomplishment Dashboard", () => {
    /* `beforeEach` runs before each Test */
    beforeEach(() => {
        cy.visit("/accomplishments");
    });

    it("should showing Error when Information is missed", () => {
        /* Get Elements and type Information */
        cy.get("[data-cy='accomplishment-title-input']").type("Walking Accomplishment");
        cy.get("[data-cy='accomplishment-input']").type("Walking Accomplishment with Bruno");
        /* Get Button and click it */
        cy.contains("button", "Submit Accomplishment").click();
        /* Get Error and assert it */
        cy.contains("Complete the Items above to continue").should("be.visible");
    });

    it("should showing Validation when Information is completed", () => {
        /* Get Elements and type Information */
        cy.get("[data-cy='accomplishment-title-input']").type("Walking Accomplishment");
        cy.get("[data-cy='accomplishment-input']").type("Walking Accomplishment with Bruno");
        cy.get("[data-cy='accomplishment-checkbox']").click();
        /* Get Button and click it */
        cy.contains("button", "Submit Accomplishment").click();
        /* Get Validation and assert it */
        cy.contains("This Accomplishment was successfully submitted").should("be.visible");
    });

    it("should returning back to Accomplishment Dashboard with empty Inputs when Button `Go Back` is clicked", () => {
        /* Get Elements and type Information */
        cy.get("[data-cy='accomplishment-title-input']").type("Walking Accomplishment");
        cy.get("[data-cy='accomplishment-input']").type("Walking Accomplishment with Bruno");
        cy.get("[data-cy='accomplishment-checkbox']").click();
        /* Get Button and click it */
        cy.contains("button", "Submit Accomplishment").click();
        /* Get Validation and assert it */
        cy.contains("This Accomplishment was successfully submitted").should("be.visible");
        /* Get Button `Go back` and click it */
        cy.contains("button", "Go back").click();
        /* Get Element and assert it */
        cy.contains("h2", "Accomplishment").should("be.visible");
        /* Get Elements and assert them */
        cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
        cy.get("[data-cy='accomplishment-input']").should("have.value", "");
        cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked");
    });
});
