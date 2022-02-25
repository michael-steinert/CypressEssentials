/// <reference types="cypress" />

describe("Habit Dashboard", () => {
    /* `beforeEach` runs before each Test */
    beforeEach(() => {
        cy.visit("/habits");
    });

    it("should displaying Modal when Button `add` is clicked", () => {
        /* Get Button `add` and click it */
        cy.contains("button", "Add").click();
        /* Get Modal Title and assert it */
        cy.contains("Add a new Habit").should("be.visible");
    });

    it("should displaying Habit Card when new Habit is added", () => {
        /* Get Button `Add` and click it */
        cy.get("#habit-add-btn").click();
        /* Get Input and type a Text */
        cy.get("input[placeholder='Habit']").type("Going for a Walk with Bruno");
        /* Get Button `Save Changes` and click it */
        cy.contains("button", "Save Changes").click();
        /* Get new Habit and assert it */
        cy.contains("Going for a Walk with Bruno")
            .should("be.visible")
            .and("have.class", "HabitCard__habit-container");
    });

    it("should toggling Status when Habit Card is clicked", () => {
        /* Get Button `Add` and click it */
        cy.get("#habit-add-btn").click();
        /* Get Input and type a Text */
        cy.get("input[placeholder='Habit']").type("Going for a Walk with Bruno");
        /* Get Button `Save Changes` and click it */
        cy.contains("button", "Save Changes").click();
        /* Get closed Status and assert it */
        cy.get("[src*='close']").should("be.visible");
        /* Get new Habit and click the Status */
        cy.contains("Going for a Walk with Bruno").click();
        /* Get checked Status and assert it */
        cy.get("[src*='check']").should("be.visible");
    });
});
