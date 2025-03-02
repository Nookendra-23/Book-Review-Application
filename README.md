# Bookstore API - IBM CAD220EN Project

This is a simple backend application built using **Node.js** and **Express.js**. It allows users to access basic information about books, add reviews, and perform user authentication. This API serves as a learning project for back-end application development.

### Table of Contents
1. [Project Description](#project-description)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
   - [General Endpoints](#general-endpoints)
   - [Authenticated Endpoints](#authenticated-endpoints)
5. [Testing with Postman](#testing-with-postman)
6. [License](#license)

---

## Project Description

The **Bookstore API** provides a RESTful interface for interacting with a collection of books. Users can perform the following actions:
- Register and log in to the application.
- Add and delete reviews for books.
- Retrieve books based on title, author, or ISBN.
- Retrieve reviews of books.

---

## Technologies Used
- **Node.js** - JavaScript runtime for building the server-side application.
- **Express.js** - Web framework for building RESTful APIs.
- **JWT (JSON Web Token)** - Used for user authentication.
- **Session Management** - To maintain user login status.

---

## Getting Started

### Prerequisites
- **Node.js** and **npm** (Node Package Manager) should be installed on your machine. You can download them from [here](https://nodejs.org/).
- **Postman** (for testing the API) is recommended but not required. You can download it from [here](https://www.postman.com/downloads/).

### Installation
1. Clone the repository:
   ```bash
   https://github.com/Nookendra-23/Book-Review-Application.git

2. Navigate to the project directory:
   ```bash
   cd bookstore-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

### Running the Application

To run the application locally, follow these steps:

1. **Start the server**:
   ```bash
   npm start
   ```

2. The server will be running on `http://localhost:1337`. You can access it via a browser or API testing tools like **Postman**.

---

## API Endpoints

### General Endpoints (No Authentication Required)

1. **Get all books**  
   **GET** `/`  
   Retrieves a full list of books in the store.

2. **Get books by author**  
   **GET** `/author/:author`  
   Example: `/author/Frank%20Herbert`  
   Retrieves books by the given author.

3. **Get books by title**  
   **GET** `/title/:title`  
   Example: `/title/Dune`  
   Retrieves books by the given title.

4. **Get book reviews by ISBN**  
   **GET** `/review/:isbn`  
   Example: `/review/9780441013593`  
   Retrieves reviews for the specified book by ISBN.

5. **User Registration**  
   **POST** `/register`  
   Body:
   ```json
   {
     "username": "test",
     "password": "password"
   }
   ```
   Registers a new user.

### Authenticated Endpoints (Requires User Login)

1. **User Login**  
   **POST** `/customer/login`  
   Body:
   ```json
   {
     "username": "test",
     "password": "password"
   }
   ```
   Logs in the user and returns a session token.

2. **Add Book Review**  
   **PUT** `/customer/auth/review/:isbn`  
   Body:
   ```json
   {
     "review": "This book was amazing!"
   }
   ```
   Adds a review for a specific book (authenticated users only).

3. **Delete Book Review**  
   **DELETE** `/customer/auth/review/:isbn`  
   Deletes the review for a book (authenticated users only).

---

## Testing with Postman

To test the API, you can import the following collections into **Postman**:
1. Create a **new request** in Postman and select the appropriate **HTTP method** and **URL** for each API endpoint.
2. Set the **Content-Type** header to `application/json` for POST, PUT, and DELETE requests.
3. For authenticated endpoints, use the `accessToken` received from the **login** API in the **Authorization** header of your requests.

### Example Requests:
- **POST Register**:
   - URL: `http://localhost:1337/register`
   - Method: `POST`
   - Body:
   ```json
   {
     "username": "test",
     "password": "password"
   }
   ```

- **POST Login**:
   - URL: `http://localhost:1337/customer/login`
   - Method: `POST`
   - Body:
   ```json
   {
     "username": "test",
     "password": "password"
   }
   ```

- **PUT Add Review**:
   - URL: `http://localhost:1337/customer/auth/review/9780441013593`
   - Method: `PUT`
   - Body:
   ```json
   {
     "review": "This book was amazing!"
   }
   ```

- **DELETE Delete Review**:
   - URL: `http://localhost:1337/customer/auth/review/9780441013593`
   - Method: `DELETE`

---

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

---

### Conclusion

This README provides instructions for setting up, running, and testing the **Bookstore API**. It covers installation, running the server, testing with Postman, and details about the available API endpoints. You can use this API to manage books, authors, and reviews, along with user authentication functionality.

Let me know if you need any additional details or modifications to this README!
