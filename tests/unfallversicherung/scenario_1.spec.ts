import { test, expect } from "@playwright/test";

test("unfallversicherung", async ({ page }) => {
  
  await page.goto('https://inno.kxlabs.allianz.de/unfallversicherung/');

  await page
    .getByRole("heading", { name: "Unfallversicherung berechnen" })
    .click();

  await page.getByRole("textbox", { name: "Geburtsdatum" }).click();

  await page.getByRole("textbox", { name: "Geburtsdatum" }).fill("08.04.1990");

  await page.getByRole("textbox", { name: "Geburtsdatum" }).press("Tab");

  await page.getByRole("button", { name: "Erwerbstätigkeit" }).click();

  await page
    .getByRole("option", { name: "kaufmännisch & verwaltend" })
    .getByText("kaufmännisch & verwaltend")
    .click();

  await page
    .getByRole("button", { name: "JETZT TARIF BERECHNEN Button" })
    .click();
    
  await expect(page).toHaveURL(
    "https://inno.kxlabs.allianz.de/unfallversicherung/angebot/erhalten"
  );

});
