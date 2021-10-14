let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

const newBook1 = new Book("Hobbit", "Tolkien", 758, "read already");
myLibrary.push(newBook1);

const newBook2 = new Book("Fx God", "MartinK", 420, "read already");
myLibrary.push(newBook2);

function addBookToLibrary() {
  let title = prompt("What is the name of the book?");
  let author = prompt("Who wrote the book?");
  let pages = +prompt("How many pages this book has?");
  let read = prompt("Book is (already read / yet to be read)?");

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

let list = document.querySelector(".list");

function displayTable() {
  list.innerHTML = "";
  myLibrary.forEach(function (book) {
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

    console.log(book);
  });
}

displayTable();
