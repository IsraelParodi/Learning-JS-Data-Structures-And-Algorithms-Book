// Object Oriented Programming (OOP)
class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printTitle() {
    console.log(this.title);
  }
}

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

const book = new Book("title", "pag", "isbn");
const itBook = new ITBook("title1", "pag1", "isbn1", "java");

book.printTitle();
itBook.printTechnology();
