import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from uuid import UUID, uuid4


# Creating pydantic data models


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


# Creating DB


# Creating routes


# Running the API
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=9000)
