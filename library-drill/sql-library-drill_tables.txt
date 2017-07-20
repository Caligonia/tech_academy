CREATE DATABASE db_library
;

USE db_library



CREATE TABLE tbl_book (
	pk_bookId INT PRIMARY KEY NOT NULL IDENTITY (500,1),
	title VARCHAR(75) NOT NULL,
	fk_publisherName VARCHAR(75) NOT NULL FOREIGN KEY REFERENCES tbl_publisher(pk_name)
);

CREATE TABLE tbl_book_authors (	
	fk_bookId INT NOT NULL FOREIGN KEY REFERENCES tbl_book(pk_bookId)
	authorName VARCHAR(150) NOT NULL,
);

CREATE TABLE tbl_publisher (
	pk_name VARCHAR(75) PRIMARY KEY NOT NULL,
	[address] VARCHAR(150) NOT NULL,
	phone VARCHAR(50) NOT NULL
);

CREATE TABLE tbl_book_loans (
	fk_bookId INT NOT NULL FOREIGN KEY REFERENCES tbl_book(pk_bookId),
	fk_branchId INT NOT NULL FOREIGN KEY REFERENCES tbl_library_branch(pk_branchId),
	fk_cardNo INT NOT NULL FOREIGN KEY REFERENCES tbl_borrower(pk_cardNo),
	dateOut DATE NOT NULL,
	dueDate DATE NOT NULL
);

CREATE TABLE tbl_book_copies (
	fk_bookId INT NOT NULL FOREIGN KEY REFERENCES tbl_book(pk_bookId),
	fk_branchId INT NOT NULL FOREIGN KEY REFERENCES tbl_library_branch(pk_branchId),
	no_of_copies INT NOT NULL
);

CREATE TABLE tbl_borrower (
	pk_cardNo INT PRIMARY KEY NOT NULL IDENTITY (100,1),
	name VARCHAR(75) NOT NULL,
	[address] VARCHAR(150) NOT NULL,
	phone VARCHAR(50) NOT NULL
);

CREATE TABLE tbl_library_branch (
	pk_branchId INT PRIMARY KEY NOT NULL IDENTITY (0,1),
	branchName VARCHAR(50) NOT NULL,
	[address] VARCHAR(150) NOT NULL
);


-- End --



























