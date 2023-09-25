describe("Full website flow", () => {
    it("Invalid Blog Description Flow", () => {
        cy.viewport(1920, 1080);
        cy.visit("https://jd-fullstack.vercel.app/");
        cy.contains("WELCOME TO MY BLOG");
        cy.contains("Create New Blog Post").click();
        cy.wait(1000);
        cy.get("div.cm-content").click().type("# test heading");
        cy.contains("Submit").click();
        cy.get("input").click().type("E2E Test Title");
        cy.contains("Submit").click();
        cy.wait(500);
        cy.contains("Description cannot be empty");
    });
    it("Invalid Blog Title Flow", () => {
        cy.viewport(1920, 1080);
        cy.visit("https://jd-fullstack.vercel.app/");
        cy.contains("WELCOME TO MY BLOG");
        cy.contains("Create New Blog Post").click();
        cy.wait(1000);
        cy.get("div.cm-content").click().type("# test heading");
        cy.contains("Submit").click();
        cy.get("textarea").click().type("E2E Test Description");
        cy.contains("Submit").click();
        cy.wait(500);
        cy.contains("Title cannot be empty");
    });
});
