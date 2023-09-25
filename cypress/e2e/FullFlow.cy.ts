describe("Full website flow", () => {
    it("Full Blog Post Flow", () => {
        cy.viewport(1920, 1080);
        cy.visit("https://jd-fullstack.vercel.app/");
        cy.contains("WELCOME TO MY BLOG");
        cy.contains("Create New Blog Post").click();
        cy.wait(1000);
        cy.get("div.cm-content").click().type("# test heading");
        cy.contains("Submit").click();
        cy.get("input").click().type("E2E Test Title");
        cy.get("textarea").click().type("E2E Test Description");
        cy.contains("Submit").click();
        cy.wait(1000);
        cy.contains("E2E Test Title").click();
        cy.wait(5000);
        cy.visit("https://jd-fullstack.vercel.app/");
        cy.get("#E2ETestTitleedit").click();
        cy.wait(3000);
        cy.get("div.cm-content")
            .click()
            .type("{enter}")
            .type("{enter} # another smaller test heading");
        cy.contains("Update").click();
        cy.get("input").click().type("Updated E2E Test Title");
        cy.get("textarea").click().type("Updated E2E Test Description");
        cy.contains("Submit").click();
        cy.wait(1000);
        cy.contains("Updated E2E Test Title").click();
        cy.wait(5000);
        cy.visit("https://jd-fullstack.vercel.app/");
        cy.get("#UpdatedE2ETestTitledel").click();
    });
});
