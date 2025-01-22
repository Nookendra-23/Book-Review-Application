Here is the converted README file in markdown format:

```markdown
# Bookstore API

## Project Setup

### Navigate to the project directory:
```bash
cd bookstore-api
```

### Install dependencies:
```bash
npm install
```

## Running the Application

To run the application locally, follow these steps:

### Start the server:
```bash
npm start
```
The server will be running on `http://localhost:1337`. You can access it via a browser or API testing tools like Postman.

## API Endpoints

### General Endpoints (No Authentication Required)

- **Get all books**  
  **GET /**  
  Retrieves a full list of books in the store.

- **Get books by author**  
  **GET /author/:author**  
  Example: `/author/Frank%20Herbert`  
  Retrieves books by the given author.

- **Get books by title**  
  **GET /title/:title**  
  Example: `/title/Dune`  
  Retrieves books by the given title.

- **Get book reviews by ISBN**  
  **GET /review/:isbn**  
  Example: `/review/9780441013593`  
  Retrieves reviews for the specified book by ISBN.

### User Registration

- **POST /register**  
  Body:
  ```json
  {
    "username": "test",
    "password": "test4"
  }
  ```
  Registers a new user.

### Authenticated Endpoints (Requires User Login)

- **User Login**  
  **POST /customer/login**  
  Body:
  ```json
  {
    "username": "darthvader",
    "password": "1amyourFath3r"
  }
  ```
  Logs in the user and returns a session token.

- **Add Book Review**  
  **PUT /customer/auth/review/:isbn**  
  Body:
  ```json
  {
    "review": "This book was amazing!"
  }
  ```
  Adds a review for a specific book (authenticated users only).

- **Delete Book Review**  
  **DELETE /customer/auth/review/:isbn**  
  Deletes the review for a book (authenticated users only).

## Testing with Postman

To test the API, you can import the following collections into Postman:

- Create a new request in Postman and select the appropriate HTTP method and URL for each API endpoint.
- Set the `Content-Type` header to `application/json` for POST, PUT, and DELETE requests.
- For authenticated endpoints, use the `accessToken` received from the login API in the `Authorization` header of your requests.

### Example Requests:

- **POST Register:**

  URL: `http://localhost:1337/register`  
  Method: `POST`  
  Body:
  ```json
  {
    "username": "test",
    "password": "test1"
  }
  ```

- **POST Login:**

  URL: `http://localhost:1337/customer/login`  
  Method: `POST`  
  Body:
  ```json
  {
    "username": "test",
    "password": "test1"
  }
  ```

- **PUT Add Review:**

  URL: `http://localhost:1337/customer/auth/review/9780441013593`  
  Method: `PUT`  
  Body:
  ```json
  {
    "review": "This book was amazing!"
  }
  ```

- **DELETE Delete Review:**

  URL: `http://localhost:1337/customer/auth/review/9780441013593`  
  Method: `DELETE`
```

This README provides clear instructions for setting up and running the API, as well as detailed examples for testing the API using Postman.
