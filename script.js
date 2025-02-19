class Book {
    constructor (title, author, price, image) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.image = image;

    }
   
}

let book1 = new Book ('Untamed Hardcover', 'Glennon Doyle', 19.99, './img/01.jpg');
let book2 = new Book ('Where the Crawdads Sing', 'Delia Owens', 17.00, './img/02.jpg');
let book3 = new Book ('Burn After Writing', 'Sharon Jones', 11.58, './img/03.jpg');
let book4 = new Book ('My Giant Seek-and-Find Activity Book', 'Roger Priddy', 7.34, './img/04.jpg');
document.getElementById('book1').innerHTML = `<img src="${book1.image}"> <br> Book Name: ${book1.title}. <br> Autor: ${book1.author}. <br> Price: $${book1.price}`;
document.getElementById('book2').innerHTML = `<img src="${book2.image}"> <br> Book Name: ${book2.title}. <br> Autor: ${book2.author}. <br> Price: $${book2.price}`;
document.getElementById('book3').innerHTML = `<img src="${book3.image}"> <br> Book Name: ${book3.title}. <br> Autor: ${book3.author}. <br> Price: $${book3.price}`;
document.getElementById('book4').innerHTML = `<img src="${book4.image}"> <br> Book Name: ${book4.title}. <br> Autor: ${book4.author}. <br> Price: $${book4.price}`;