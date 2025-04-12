
# Qoura Post Management Application

This project demonstrates managing posts through CRUD operations using Express.js, including creating, viewing, editing, and deleting posts. It employs UUID for unique post identifiers and method override for HTTP methods.

## Main Functionalities:
- **Create Post**: Users can create and submit new posts.
- **View Posts**: Display all available posts and their details.
- **Edit Post**: Allow editing of existing post content.
- **Delete Post**: Facilitate the deletion of posts.

## APIs and their Purpose:

1. **GET `/`**
   - Confirm server status and basic connectivity.

2. **GET `/post`**
   - Display all posts.

3. **GET `/post/new`**
   - Render form to create a new post.

4. **POST `/post`**
   - Submit a new post and save it to the array.

5. **GET `/post/:id`**
   - Retrieve and display details of a specific post.

6. **GET `/post/:id/edit`**
   - Retrieve specific post data for editing.

7. **PATCH `/post/:id`**
   - Update specific post content.

8. **DELETE `/post/:id`**
   - Delete a specific post from the array.

## Project Structure Explanation:
- Built with `Express.js` for server-side logic and routing.
- Uses UUID for generating unique identifiers for each post.
- Integrates `method-override` for enabling HTTP verbs like PATCH and DELETE.
- Employs EJS templating for rendering views dynamically.

## Screenshots:
![Screenshot 2025-04-12 170244](https://github.com/user-attachments/assets/ab013b8e-66bc-47dd-a6b8-33618e0e3eca)
![Screenshot 2025-04-12 170345](https://github.com/user-attachments/assets/02c9271a-79e5-4f5a-b7d3-9b4bc1e9a3f5)
![Screenshot 2025-04-12 170351](https://github.com/user-attachments/assets/743e4abe-fcda-4ce4-b440-9ff7ced849cf)

---
This project serves as a practical implementation of basic CRUD functionality using Express.js and server-side rendering with EJS.
