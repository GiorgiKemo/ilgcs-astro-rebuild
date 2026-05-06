import { expect, test } from "@playwright/test";

test("bath page renders core lead-gen sections", async ({ page }, testInfo) => {
  await page.goto("/bath/");

  await expect(page).toHaveTitle(/Walk-In Shower & Bath Remodeling/);
  await expect(page.getByRole("heading", { name: /stylish walk-in shower/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /How Much It Should Cost/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Installation Options" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Colors & Patterns" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /What Our Client/i })).toBeVisible();

  await page.evaluate(async () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    for (let y = 0; y <= max; y += Math.max(window.innerHeight * 0.8, 400)) {
      window.scrollTo(0, y);
      await new Promise((resolve) => window.setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });

  await page.screenshot({
    path: testInfo.outputPath(`bath-${testInfo.project.name}.png`),
    fullPage: true
  });
});

test("estimate wizard advances to contact fields", async ({ page }) => {
  await page.goto("/bath/#estimate");

  await expect(page.getByText("Where is the bathroom located?")).toBeVisible();
  await page.getByRole("button", { name: "Next step" }).click();
  await expect(page.getByText("Describe your project")).toBeVisible();

  for (let index = 0; index < 7; index += 1) {
    await page.getByRole("button", { name: "Next step" }).click();
  }

  const wizard = page.locator('form[name="bath-estimate-wizard"]');
  await expect(wizard.getByPlaceholder("Your phone")).toBeVisible();
  await expect(wizard.getByRole("button", { name: "Submit" })).toBeVisible();
});

test("town SEO page is static and indexable", async ({ page }) => {
  await page.goto("/bathroom-remodeling/schaumburg-il/");

  await expect(page).toHaveTitle(/Bathroom Remodeling in Schaumburg, IL/);
  await expect(page.locator("h1").filter({ hasText: "Bathroom remodeling in Schaumburg" })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /index/);
});

test("ad landing page is noindex and conversion focused", async ({ page }) => {
  await page.goto("/lp/bath-remodel-offer/");

  await expect(page).toHaveTitle(/Bath Remodel Discount Offer/);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.getByRole("heading", { name: /Bath Remodel Discount/i })).toBeVisible();
});
