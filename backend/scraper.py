from playwright.async_api import async_playwright
import base64
from bs4 import BeautifulSoup
import tldextract


from models import Scrape_Request, Scrape_Response


async def scrape(request: Scrape_Request):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        try:
            page = await browser.new_page()
            await page.goto(request.url)
            title = await page.title()
            html = await page.content()
            relative_links = get_relative_links(request.url, html)
            screenshot_bytes = await page.screenshot()
            screenshot = base64.b64encode(screenshot_bytes).decode("utf-8")
            await browser.close()
            return Scrape_Response(
                title=title,
                relative_links=relative_links,
                html=html,
                screenshot=screenshot,
            )
        except Exception as e:
            return {"error": f"Error scraping {request.url}. {e}"}


def get_relative_links(url, html):
    result = []
    url_extract = tldextract.extract(url)
    soup = BeautifulSoup(html, "html.parser")
    links = soup.find_all("a")
    for link in links:
        href = link.get("href")
        href_extract = tldextract.extract(href)
        if href and href.startswith("/"):
            result.append(href)
        elif url_extract.domain == href_extract.domain:
            result.append(href)
    result = list(set(result))
    result.sort()
    return result
