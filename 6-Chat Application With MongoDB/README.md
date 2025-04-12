
# NodeJS Chat Application

This project is a Node.js-based chat application designed to showcase the retrieval and management of data from multiple sources/files using MongoDB for database operations. It demonstrates fundamental CRUD operations (Create, Read, Update, Delete) and API handling.

## Main Functionalities:
- **Create New Chat**: Users can start new conversations.
- **Edit Chat**: Users can edit existing chat messages.
- **Delete Message**: Users can delete specific chat messages.
- **View Chats**: Retrieve and display all chat messages.

## APIs and their Purpose:

1. **GET `/`**
   - Purpose: Root API to confirm server is operational.

2. **GET `/chat`**
   - Purpose: Retrieve and display all chat messages.

3. **GET `/chat/new`**
   - Purpose: Render form to create a new chat message.

4. **POST `/chat`**
   - Purpose: Submit a new chat message and save it in the database.

5. **GET `/chat/:id/edit`**
   - Purpose: Retrieve a specific chat message to edit.

6. **PUT `/chat/:id`**
   - Purpose: Update a specific chat message based on user input.

7. **DELETE `/chat/:id`**
   - Purpose: Delete a specific chat message from the database.

## Project Structure Explanation:
- Utilizes `Express.js` for server setup and routing.
- Implements `mongoose` for MongoDB interactions.
- Uses `method-override` middleware for handling HTTP verbs beyond GET and POST.
- Manages asynchronous operations robustly with `asyncWrap`.

## Database Connection:
- MongoDB running locally at: `mongodb://127.0.0.1:27017/whatsapp`

## Screenshots:

*(Embed your project screenshots here.)*

---
This application effectively demonstrates backend management of chat functionalities, including interaction with a database, dynamic routing, and API integration in Node.js.
