
# User Management Application with SQL

This project demonstrates user management operations using Express.js and MySQL, including CRUD functionalities with SQL queries for handling user data.

## Main Functionalities:
- **View Users**: Display a list of all registered users.
- **Edit User**: Update user details.
- **Delete User**: Remove user entries from the database.
- **Count Users**: Display the total number of users.

## APIs and their Purpose:

1. **GET `/`**
   - Display total number of users registered in the database.

2. **GET `/user`**
   - Retrieve and display details of all users.

3. **GET `/user/:id/edit`**
   - Retrieve user details for editing purposes.

4. **PATCH `/user/:id`**
   - Update specific user's information.

5. **DELETE `/user/:id`**
   - Delete a specific user from the database.

## Database Connection:
- MySQL Database (`delta_practice`) running locally.
- User: `root`, Password: `saeed123`.

## Project Structure Explanation:
- Uses `Express.js` for routing and server-side logic.
- `mysql2` for interacting with the MySQL database.
- Employs `faker` library for generating random user data for testing.
- Implements `method-override` to support PATCH and DELETE HTTP methods.

## Screenshots:
![Screenshot 2025-04-12 173029](https://github.com/user-attachments/assets/c8e8636e-b2d2-44ae-95fb-7b393d63259d)
![Screenshot 2025-04-12 173042](https://github.com/user-attachments/assets/b855b720-ddf3-45b7-b614-3ae9a2b58e1c)
![Screenshot 2025-04-12 173057](https://github.com/user-attachments/assets/4e6effb8-978b-41ee-b566-4f1935df429a)
---
This application highlights effective management of user data through robust database interactions, query execution, and server-side operations using Express.js and MySQL.
