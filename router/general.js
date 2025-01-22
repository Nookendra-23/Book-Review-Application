const express = require("express");
const axios = require("axios");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const doesExist = (username) => {
  return users.some((user) => user.username === username);
};

const getAllBooks = async () => {
  try {
    // Simulate fetching book data using Axios
    const response = await axios.get("http://localhost:1337/"); // Change URL if needed
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", error);
  }
};

// Get the book list available in the shop
public_users.get("/", async (req, res) => {
  try {
    const allBooks = await getAllBooks();
    return res.status(200).send(JSON.stringify(allBooks, null, 4));
  } catch (e) {
    res.status(500).send(e);
  }
});

// Get book details based on ISBN using async/await with Axios
public_users.get("/isbn/:isbn", async (req, res) => {
  const targetISBN = req.params.isbn;
  try {
    // Simulate fetching book by ISBN using Axios
    const response = await axios.get(`http://localhost:1337/isbn/${targetISBN}`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(404).json({ message: "ISBN not found." });
  }
});

// Get book details based on author using async/await with Axios
public_users.get("/author/:author", async (req, res) => {
  const author = req.params.author;
  try {
    // Simulate fetching books by author using Axios
    const response = await axios.get(`http://localhost:1337/author/${author}`);
    return res.status(200).send(JSON.stringify(response.data, null, 4));
  } catch (error) {
    return res.status(404).json({ message: "No books by that author." });
  }
});

// Get all books based on title using async/await with Axios
public_users.get("/title/:title", async (req, res) => {
  const title = req.params.title;
  try {
    // Simulate fetching books by title using Axios
    const response = await axios.get(`http://localhost:1337/title/${title}`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(404).json({ message: "Title not found." });
  }
});

// Get book review based on ISBN using async/await with Axios
public_users.get("/review/:isbn", async (req, res) => {
  const targetISBN = req.params.isbn;
  try {
    // Simulate fetching reviews of a book using Axios
    const response = await axios.get(`http://localhost:1337/review/${targetISBN}`);
    return res.status(200).send(JSON.stringify(response.data, null, 4));
  } catch (error) {
    return res.status(404).json({ message: "ISBN not found." });
  }
});

module.exports.general = public_users;
