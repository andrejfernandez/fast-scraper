from pydantic import BaseModel
from typing import List, Optional


class Scrape_Request(BaseModel):
    url: str


class Scrape_Response(BaseModel):
    title: str
    relative_links: List[str]
    html: str
    screenshot: str
