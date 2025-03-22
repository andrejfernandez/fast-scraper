from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from models import Scrape_Request, Scrape_Response
from scraper import scrape

# Creating application
app = FastAPI()

# Adding CORS
origins = ["http://localhost:3000"]

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
    response = await scrape(request)
    try:
        if response.title:
            return response
    except Exception as e:
        return {"error": f"Error scraping {request.url}. {e}"}


# # Running the API
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=9000)
