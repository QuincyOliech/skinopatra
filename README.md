# Skinopatra
Welcome to Skinopatra, a skincare brand that has cautiously created idea of conveying nature to your doorstep.We trust that nobody ought to need to trade off their wellbeing for beauty.
## Goals
Implement a mini web app to practice components, props, state, events, and data fetching in react
## Instructions
For this project, you’ll be building out a React application that displays a list of available products, among other features.
## Requirements
1. It is a single page application (only one index.html file) created using create-react-app
2. App uses at least 5 components in a way that keeps code well organized
3. There should be at least 3 client-side routes using react-routerLinks to an external site. A json-server is used to create a RESTful API for your backend and make both a GET and a POST request to the json server. 
## Setup
1. In a new terminal, run `npm start`. This will run your React app on port `3000`.
2. Run this command to get the backend started:
json-server --watch db.json --port 8001
## Endpoints
JSON file linked using Railway to retrieve the product data and app deployed on Netlify.
## Core Deliverables
A user should be able to:
See images of all products rendered in product collection.

### Endpoints for Core Deliverables
#### GET /products
Example Response:
[
  {
    "id": 1,
    "title": "Beautique Serum",
    "category":"treatments and serums",
    "description": "Contains 10% Niacinamide (Vitamin B3) and 5.7% Zinc PCA which work together to reduce hyperpigmentation, blemishes, control sebum production, even out the skin tone and texture.",
    "price": "15",
    "totalItems": 30,
    "itemsSold": 7,
    "image": "https://images.pexels.com/photos/8101532/pexels-photo-8101532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
     "id": 2,
    "title": "Beautique Toner",
    "category":"cleansers",
    "description": "Toner is infused with 1% PHA, Hyaluronic Acid, Kombucha and African Rooibos Leaf Extract to protect the skin barrier by balancing skin pH.",
    "price": "20",
    "totalItems": 50,
    "itemsSold": 20,
    "image": "https://images.pexels.com/photos/8131585/pexels-photo-8131585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
]
