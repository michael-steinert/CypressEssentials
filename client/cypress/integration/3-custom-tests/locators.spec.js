/// <reference types="cypress" />

describe("Locators", () => {
    /* `beforeEach` runs before each Test */
    beforeEach(() => {
        cy.visit("/elements");
    });

    it("should locating Elements with get()", () => {
        /* Get all Elements by Tag Name */
        cy.get("button");

        /* Get all Elements by Tag Name */
        cy.get(".btn-with-class");

        /* Get all Elements by Attribute */
        cy.get("[class='Elements-btn btn-with-class']");
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

        /* Get Element by ID */
        cy.get("[id='btn-with-id']");
        cy.get("#btn-with-id");

        /* Get all Elements by specific Attribute */
        cy.get("[type='submit']");

        /* Get all Elements by Tag Name and Class */
        cy.get("button.Elements-btn");

        /* Get all Elements by Tag Name and Class and ID */
        cy.get("button.Elements-btn#btn-with-id");

        /* Get all Elements by Tag Name and Class and Attribute */
        cy.get("button.Elements-btn[type='submit']");

        /* Get all Elements with specific Data Test ID */
        cy.get("[data-cy='btn-id-1']");
        /* Using Custom Command from `commands.js` */
        cy.getByTestId("btn-id-1");
    });

    it("should locating Elements with contains()", () => {
        /* Get Element by Text */
        cy.contains("Unique Text");

        /* Get Element by Text - Get the first matching Element */
        cy.contains("Not unique Text");

        /* Get Element by Text and with Selector */
        cy.contains("[type='submit']", "Not unique Text");
        cy.get("[type='submit']").contains("Not unique Text");
        cy.contains("form", "Not unique Text");
    });

    it("should locating Elements with find()", () => {
        /* Get Element by Parent `#form-1` and Child `.btn-1`*/
        cy.get("#form-1").find(".btn-1");
        cy.get("#form-1").find(".btn-2");
    });
});
