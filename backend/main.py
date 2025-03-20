import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from uuid import UUID, uuid4
from models import Scrape_Request, Scrape_Response
from scraper import scrape

# Creating application
app = FastAPI()

# Adding CORS
origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Creating routes
@app.post("/scrape", response_model=Scrape_Response)
async def scrape_url(request: Scrape_Request):
    response = await scrape(request.url)
    if response.title:
        return response
    else:
        return {"error": f"Error scraping {request.url}"}


# # Running the API
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=9000)
