# **Bookstore API - IBM CAD220EN Project**

This is a simple backend application built using **Node.js** and **Express.js**. It allows users to access basic information about books, add reviews, and perform user authentication. This API serves as a learning project for back-end application development.

## **Table of Contents**
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

## **Project Description**
The **Bookstore API** provides a RESTful interface for interacting with a collection of books. Users can perform the following actions:
- Register and log in to the application.
- Add and delete reviews for books.
- Retrieve books based on title, author, or ISBN.
- Retrieve reviews of books.

---

## **Technologies Used**
- **Node.js** - JavaScript runtime for building the server-side application.
- **Express.js** - Web framework for building RESTful APIs.
- **JWT (JSON Web Token)** - Used for user authentication.
- **Session Management** - To maintain user login status.

---

## **Getting Started**

### **Prerequisites**
- **Node.js** and **npm** (Node Package Manager) should be installed on your machine. You can download them from [here](https://nodejs.org/).

- **Postman** (for testing the API) is recommended but not required. You can download it from [here](https://www.postman.com/downloads/).

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bookstore-api.git
