
# Instagram App (EJS Templating)

This project is an Express.js-based web application demonstrating templating with EJS. It simulates basic Instagram-like functionality including user profile retrieval and random dice rolls.

## Main Functionalities:
- **User Profile Search**: Fetch and display user profile details.
- **Dice Roll Feature**: Generate a random dice roll outcome.

## APIs and their Purpose:

1. **GET `/ig/:username`**
   - Retrieve and display Instagram profile details for the specified username.

2. **GET `/dice`**
   - Display a random dice roll result.

## Project Structure Explanation:
- Built using `Express.js` for routing and server-side operations.
- Implements `EJS` as the templating engine for dynamic content rendering.
- Uses static files for serving CSS and JavaScript.

## Directory Structure:
```
.
├── public
│   ├── CSS
│   └── JS
├── views
│   ├── instagram.ejs
│   ├── error.ejs
│   └── rolldice.ejs
├── data.json
└── index.js
```

## Screenshots:

*(Embed your project screenshots here.)*

---
This project effectively demonstrates basic routing, EJS templating, and static file handling to create dynamic and interactive web pages.
