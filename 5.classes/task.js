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
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
        }
    }


class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type  = "book"
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type  = "novel";
    }
}

class FantasticBook extends Book  {
     constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type  = "fantastic";
    }
}

class DetectiveBook extends Book  {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type  = "detective";
    }
}
  

//Задача №2//

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
 
    addBook(book) {
        if(this.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        this.books.find(function(item) {
            item = [type, value]()
        }) 
        if(!this.name) {
            return null;
        } else {
            return this.name;
        }
    }

    giveBookByName(bookName) {
      this.books.findIndex(function(value) {
          if(bookName === value) {
              this.books.splice()
              return bookName;
          } 
          if(!bookName) {
              return null;
          }
      }) 

    }
}

