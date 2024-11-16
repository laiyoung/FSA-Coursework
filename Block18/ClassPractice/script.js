// Create a simple program in that models a Library system.
//************
// Define a Book class:
// Each Book should have a title, author, and isCheckedOut property.
// Create a method called toggleCheckOut that changes the isCheckedOut status.
class Book {
  //property everytime a book is checked out, subtract one book
  title = "";
  author = "";
  isCheckedOut = false;
  constructor(providedTitle, givenAuthor) {
    this.title = providedTitle;
    this.author = givenAuthor;
  }
  toggle() {
    // reassignment of isCheckedOut
    this.isCheckedOut = !this.isCheckedOut;
  }
}
// Define a Library Class
// The Library should have a books array to store all Book objects.
// Add a method called addBook that takes a Book object and adds it to the books array.
// Create a method called listAvailableBooks that logs all the books that are currently not checked out.
class Library {
  allbooks = [];

  constructor(allbooks) {
    this.books.concat(allbooks);
  }
  addBook(givenBook) {
    this.books.push(givenBook);
  }
  listAvailableBooks() {
        console.table(this.books);
      }
}
// // Use your classes:

// // Create an instance of Library.
const seattleGrace = new Library(this.allBooks);
console.log(seattleGrace.Library);

// // Create 3 book objects
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen");
const hungryCaterpillar = new Book("The Very Hungry Caterpillar", "Eric Carle");
const jamesGiantPeach = new Book("James and the Giant Peach", "Roald Dahl");

// // Toggle the checkout status of one book.

prideAndPrejudice.toggle();
// // Add the books to instance of library

seattleGrace.addBook();
// // Console log all available books in the library.
console.log(givenBooks);

// // Console log all available books in the library.
console.log(givenBooks);
