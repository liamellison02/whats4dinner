import puppeteer from "puppeteer";

const browserTool = async searchTerm => {
    let browser;
    try {
      browser = await puppeteer.launch();
      const [page] = await browser.pages();
      const url =
        `https://www.foodnetwork.com/search/${searchTerm.replace(/\s/g, "-")}-`;
      await page.goto(url, {waitUntil: "domcontentloaded"});
      const sel = ".o-RecipeResult .m-MediaBlock__a-Headline a";
      const el = await page.waitForSelector(sel);
      return await el.evaluate(el => el.getAttribute("href"));
    }
    finally {
      browser?.close();
    }
};
export default browserTool;