// Array that will store all books
let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Create changeSign method that will change completion sign in given book object to the opposite one
Book.prototype.changeSign = function () {
  return this.read == "✔️" ? (this.read = "❌") : (this.read = "✔️");
};

function addBookToLibrary() {
  // Take book info from user's input
  let title = document.querySelector(".bookTitle");
  let author = document.querySelector(".bookAuthor");
  let pages = document.querySelector(".bookPagesNumber");

  let read = document.querySelector("#readOrNot").value == "yes" ? "✔️" : "❌";

  // Create new book object using the Book constructor with user input values
  const newBook = new Book(title.value, author.value, +pages.value, read);

  // Add new book object to the books array
  myLibrary.push(newBook);

  // Reset input forms making them empty after adding book to library
  title.value = "";
  author.value = "";
  pages.value = "";
}

// Select list of books in order to append value to it
let list = document.querySelector(".list");

function displayTable() {
  // Delete previous table with each update
  list.innerHTML = "";
  createTableHeader();

  // Create HTML elements and append them to create new table row
  myLibrary.forEach(function (book, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let textContent1 = document.createTextNode(book.title);
    let textContent2 = document.createTextNode(book.author);
    let textContent3 = document.createTextNode(book.pages);
    let textContent4 = document.createTextNode(book.read);
    let textContent5 = document.createElement("button");
    list.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td3);
    tr.appendChild(td4).classList.add("tickOrX");
    tr.appendChild(td4).setAttribute("data-index", index);
    tr.appendChild(td5);
    td1.appendChild(textContent1);
    td2.appendChild(textContent2);
    td3.appendChild(textContent3);
    td4.appendChild(textContent4);
    td5.appendChild(textContent5).classList.add("deleteButton");
    td5.appendChild(textContent5).setAttribute("data-index", index);
  });
}

// Create header for table
function createTableHeader() {
  let tr = document.createElement("thead");
  let th1 = document.createElement("th"); // Title
  let th2 = document.createElement("th"); // Author
  let th3 = document.createElement("th"); // Pages
  let th4 = document.createElement("th"); // Finished?
  let th5 = document.createElement("th"); // Delete
  let headerContent1 = document.createTextNode("Title");
  let headerContent2 = document.createTextNode("Author");
  let headerContent3 = document.createTextNode("Pages");
  let headerContent4 = document.createTextNode("Finished?");
  let headerContent5 = document.createTextNode("Delete");

  list.appendChild(tr);
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  th1.appendChild(headerContent1);
  th2.appendChild(headerContent2);
  th3.appendChild(headerContent3);
  th4.appendChild(headerContent4);
  th5.appendChild(headerContent5);
}

displayTable();

function letUserChangeReadStatus() {
  const tickOrX = Array.from(document.querySelectorAll(".tickOrX"));
  tickOrX.forEach((tickOrX) => {
    tickOrX.addEventListener("click", () => {
      console.log(tickOrX.dataset.index);
      myLibrary[tickOrX.dataset.index].changeSign();
      tableReset();
    });
  });
}

function defineLibraryArray() {
  deleteButton = Array.from(document.querySelectorAll(".deleteButton"));
}

// Reset ability to delete another book after each one is deleted
function resetDeleteAbility() {
  deleteButton.forEach((button) => {
    button.addEventListener("click", () => {
      myLibrary.splice(button.dataset.index, 1);
      tableReset();
    });
  });
}

// Make "Add this book" button listen for clicks and run script to add book into array and then display the updated table
const addBookClick = document.querySelector(".submitBtn");
addBookClick.addEventListener("click", function () {
  addBookToLibrary();
  tableReset();
  popup.classList.toggle("active");
});

// Make the "Add book" screen show up and disappear
function popupToggle() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

// Reset whole table and redraw it with new array values
function tableReset() {
  displayTable();
  defineLibraryArray();
  resetDeleteAbility();
  letUserChangeReadStatus();
}
