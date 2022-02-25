/// <reference types="cypress" />

describe("Rewards Dashboard", () => {
    /* `beforeEach` runs before each Test */
    beforeEach(() => {
        cy.visit("/rewards");
    });

    it("should displaying a List of Rewards with Mock", () => {
        /* Intercept the Request to the Server and use instead Mock Data */
        cy.intercept("GET", "http://localhost:4000/rewards", {
            fixture: "rewards.json"
        });
        /* Get Mocks and assert them */
        cy.get("ul")
            .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
            .and("850 points for fasting for 5 days straight");
    });
});
