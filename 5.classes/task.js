'use strict'

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type  = null;
    }

    fix() {
        this.state = Math.round(this.state * 1.5);
    }

    
    set state(number) {
        if( number < 0) {
             this._state = 0;
        } 
         if(number > 100) {
              this._state = 100;
        } else {
            this._state;
        }
    }

    get state() {
        this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type  = magazine;
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type  = book;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type  = novel;
    }
}

class FantasticBook extends Book  {
    constructor(name, releaseDate, pagesCount, author) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type  = fantastic;
    }
}

class DetectiveBook extends Book  {
    constructor(name, releaseDate, pagesCount, author) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type  = detective;
    }
}
  

//Задача №2//

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
 
    addBook(book) {
        if(state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        [type, value]() 
        this.books.find(element => {
            if(element) {
                return null;
            } else {
                return element;
            }
        })
    }

    giveBookByName(bookName) {
        if(findIndex((value) => {
            this.books.splice(value);
            return bookName;
        })) if(bookName) {
            return null;
        }

    }
}

