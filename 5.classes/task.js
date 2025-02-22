'use strict'

//Задача 1//

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
             this._state = number;
        }
    }

    get state() {
         return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
        }
    }


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type  = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, author);
        this.type  = "novel";
    }
}

class FantasticBook extends Book  {
     constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type  = "fantastic";
    }
}

class DetectiveBook extends Book  {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
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
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
         let result = this.books.find(function (item) {
             return item[type] === value;
        })
        if(!result) {
            return null;
        } else {
            return result;   
        }     
    }

    giveBookByName(bookName) {
        let found = false;
        let i;
        for(i = 0; i < this.books.length; i++) {
          if (this.books[i].name === bookName) {
            found = true;
            break;
          }
        }
 
        if (!found) {
            return null;
        }
      
        var book = new Book(this.books[i].author, this.books[i].name, this.books[i].releaseDate, this.books[i].pagesCount);
        this.books.splice(i, 1);
      
        return book;
    }
}

