/* const currentDate = new Date("1999/01/02")

console.log(currentDate); */

function Book(title, author, year, genre){
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function(){
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year
    }
}

const myFavoriteBook = new Book("War and Peace", "Tolstoy", 1867, "historical novel")

console.log(myFavoriteBook.title);

const mySecondFavBook = new Book("Az algebra alapjai", "Kohári", 2022, "textbook")

console.log(mySecondFavBook.age());