from pydantic import BaseModel
from typing import List, Optional


class Scrape_Request(BaseModel):
    url: str


class Scrape_Response(BaseModel):
    title: str
    html: str
