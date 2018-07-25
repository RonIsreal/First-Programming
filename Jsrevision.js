var myBook = function (title,author,year) {
	this.title = title,
	this.author = author,
	this.year = year
}

function addBook (book) {
	$ ('.library').append("<div>"+book.title+" "+book.author+" "+book.year+"</div>");
}

var b1 = new myBook("A Game of Thrones","George R. R. Martin","1996");
var b2 = new myBook("A Clash of Kings", "George R. R. Martin", "1998");
var b3 = new myBook("A Storm of Swords","George R. R. Martin","2000");
var b4 = new myBook("A Feast of Crows","George R. R. Martin","2018");
var b5 = new myBook("A Dance with Dragons","George R. R. Martin","2011");


addBook(b1);
addBook(b2);
addBook(b3);
addBook(b4);
addBook(b5);

