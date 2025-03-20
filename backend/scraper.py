from playwright.async_api import async_playwright

from models import Scrape_Response


async def scrape(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        try:
            page = await browser.new_page()
            await page.goto(url)
            title = await page.title()
            html = await page.content()
            await browser.close()
            return Scrape_Response(title=title, html=html)
        except:
            return {"error": f"Error scraping {url}."}
