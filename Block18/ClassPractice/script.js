// Create a simple program in that models a Library system.
//************
// Define a Book class:
// Each Book should have a title, author, and isCheckedOut property.
// Create a method called toggleCheckOut that changes the isCheckedOut status.

class Book {
  /** 3 inital properties, with values established as strings
   * or the start of a boolean
   */
  title = "";
  author = "";
  isCheckedOut = false;
  /** The constructor method is used to define the properties for the class
   * Book, with arguements/parameters established
   */
  constructor(providedTitle, givenAuthor) {
    this.title = providedTitle;
    this.author = givenAuthor;
  }
  toggle() {
    /** Reassignment of isCheckedOut to "true", using a bang operator to
     * complete the boolean (true-false) statement (this would generally be
     * attached to a button outlined in your HTML file)
     */
    this.isCheckedOut = !this.isCheckedOut;
  }
}

// Define a Library Class
// The Library should have a books array to store all Book objects.
// Add a method called addBook that takes a Book object and adds it to the books array.
// Create a method called listAvailableBooks that logs all the books that are currently not checked out.
class Library {
  allBooks = [];
  //The allBooks array stores all the books assigned to a library
  constructor(allBooks) {
    this.allBooks.concat(allBooks);
    /** The constructor method is used to define the properties for the class
     * Library, with the arguement/parameter established as the allBooks array.
     * The constructor establishes the property of the library as a 
     * concatenation of any instances of allBooks
     */
  }

  addBook(book) {
    this.allBooks.push(book);
    /** A method, addBooks, with an established arguement of book, 
     * is created to add books to the all books array using a 
     * .push method
    */
  }

  listAvailableBooks() {
    console.table(this.allBooks);
    /** The method listAvailableBooks has no established arguements, and
     * simply creates a table of the array allBooks in the console
    */
  }
}
// // Use your classes:

// // Create an instance of Library (remember instances ARE objects)
const seattleGrace = new Library([]);
/** notice the arguement is an empty array. You established this as a 
 * value for any library when you made the allBooks property
 */


// // Create 3 book objects (remember instances ARE objects)
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen");
const hungryCaterpillar = new Book("The Very Hungry Caterpillar", "Eric Carle");
const jamesAndGiantPeach = new Book("James and the Giant Peach", "Roald Dahl");
/** These 3 instances of the Book object require 2 arguements, the title and
 * the author, as established in the constructor for the Book object, and
 * these 2 arguements must be string values, as outlined when you set the 
 * property values of the Book object
*/

// // Toggle the checkout status of one book.
prideAndPrejudice.toggle();
/** The toggle method you created doesn't require any parameter to 
 * function
*/

// // Add the books to instance of library
seattleGrace.addBook(prideAndPrejudice);
seattleGrace.addBook(hungryCaterpillar);
seattleGrace.addBook(jamesAndGiantPeach);
/** the addBook method requires inputs/parameters. When you add a book
 * instance as an arguement, you're defining it as a book with the properties of
 * the Book class, which pop up in the listAvailableBooks method when it's
 * called later
 */

// // Console log all available books in the library.
seattleGrace.listAvailableBooks()
/** The console table above will print the results of the listAvailableBooks 
 * method you defined in the Library class above, the dot operator indicates that
 * this method is going to be performed on the instance seattleGrace. Nothing
 * is set as an arguement, since the method didn't require any parameters
*/
