// Array that will store all books
let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// ! unnecessary
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

// todo delete this later
const newBook1 = new Book("Hobbit", "Tolkien", 758, "read already");
myLibrary.push(newBook1);

const newBook2 = new Book("Fx God", "MartinK", 420, "read already");
myLibrary.push(newBook2);
// todo delete to here

function addBookToLibrary() {
  // Take book info from user's input
  let title = document.querySelector(".bookTitle");
  let author = document.querySelector(".bookAuthor");
  let pages = document.querySelector(".bookPagesNumber");

  let read = document.querySelector("#readOrNot").value == "yes" ? "✔️" : "❌";

  // Create new book object using the Book constructor with user input values
  const newBook = new Book(title.value, author.value, +pages.value, read);

  // Add new book object to the book's array
  myLibrary.push(newBook);

  // Reset input forms making them empty after adding book to library
  title.value = "";
  author.value = "";
  pages.value = "";
}

// Select list of books in order to append value to it
let list = document.querySelector(".list");

function displayTable() {
  list.innerHTML = "";
  createTableHeader();

  myLibrary.forEach(function (book, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let textContent1 = document.createTextNode(book.title);
    let textContent2 = document.createTextNode(book.author);
    let textContent3 = document.createTextNode(book.pages);
    let textContent4 = document.createTextNode(book.read);
    list.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td1.appendChild(textContent1);
    td2.appendChild(textContent2);
    td3.appendChild(textContent3);
    td4.appendChild(textContent4);
  });
}

function createTableHeader() {
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let headerContent1 = document.createTextNode("Title");
  let headerContent2 = document.createTextNode("Author");
  let headerContent3 = document.createTextNode("Pages");
  let headerContent4 = document.createTextNode("Finished?");

  list.appendChild(tr);
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);

  th1.appendChild(headerContent1);
  th2.appendChild(headerContent2);
  th3.appendChild(headerContent3);
  th4.appendChild(headerContent4);
}

displayTable();

const addBookClick = document.querySelector(".submitBtn");
addBookClick.addEventListener("click", function () {
  addBookToLibrary();
  displayTable();
  popup.classList.toggle("active");
});

// Make the "Add book" screen show up and disappear
function popupToggle() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
