const puppeteer = require("puppeteer");

const QUERY_TO_SEARCH = process.argv[2] || "JavaScript book";
let browser;

/**
 * It launches a new instance of Puppeteer, and then returns a new page object
 * @returns A new page object.
 */
const initializePuppeteer = async () => {
  try {
      browser = await puppeteer.launch();
      return await browser.newPage();
  } catch (err) {
    throw err;
  }
};

/**
 * Close the browser instance that was created by Puppeteer.
 */browser
const closePuppeteer = async () => await browser.close();

/**
 * We initialize Puppeteer, navigate to Amazon, search for a query, wait for the results to load, and
 * then scrape the results
 */
const scrapeProducts = async () => {
  try {
    const page = await initializePuppeteer();
    await page.goto("https://www.amazon.com/");
    await page.type("#twotabsearchtextbox", QUERY_TO_SEARCH);
    await page.click("#nav-search-submit-text");
    await page.waitForNavigation();
    const products = await page.evaluate(() => {
      let results = [];
      const items = document.querySelectorAll(".s-result-item .s-card-border");
      for (let i = items.length; i--; ) {
        const item = items[i];
        const title = item.querySelector("h2 > a > span");
        const price = item.querySelector(".a-price-whole");
        const cents = item.querySelector(".a-price-fraction");
        const image = item.querySelector("img");
        if (!title || !price || !image) continue;
        results = [...results, {
          title: title.innerText,
          price: !cents?.innerText.length ? parseInt(price.innerText) : parseFloat(`${parseInt(price.innerText)}.${parseInt(cents.innerText)}`),
          image: image.getAttribute("src")
        }]
      }
      return results;
    });
    console.log(products);
    await closePuppeteer();
  } catch (err) {
    throw err;
  }
}


scrapeProducts();