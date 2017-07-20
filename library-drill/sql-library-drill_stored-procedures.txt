


Stored Proc #1

CREATE PROC spTheLostTribe_Sharpestown_Copies
AS
BEGIN
	SELECT 
		tbl_library_branch.branchName,
		tbl_book.title,
		tbl_book_copies.no_of_copies			
	FROM
		tbl_book
	INNER JOIN tbl_book_copies.fk_bookID = tbl_book.pk_bookID
	INNER JOIN tbl_book-copies.fk_branchID = tbl_book-copies.pk_branchID
	WHERE tbl_book.title = 'The Lost Tribe' AND tbl_library_branch.branchName = 'Sharpestown'
END
;

EXEC spTheLostTribe_Sharpestown_Copies
;

ALTER PROC spTheLostTribe_Branch_Copies @title varchar(75)
AS
BEGIN
	SELECT 
		tbl_library_branch.branchName,
		tbl_book.title,
		tbl_book_copies.no_of_copies			
	FROM
		tbl_book
	INNER JOIN tbl_book_copies ON tbl_book_copies.fk_bookID = tbl_book.pk_bookID
	INNER JOIN tbl_library_branch ON tbl_book_copies.fk_branchID = tbl_library_branch.pk_branchID
	WHERE tbl_book.title LIKE '%'+@title+'%'
	ORDER BY tbl_library_branch.branchName, tbl_book.title ASC
END
;

spTheLostTribe_Branch_Copies @title ='Lost'

Stored Proc #3

ALTER PROC spNoCheckOut
AS
BEGIN
	SELECT  
		tbl_borrower.name,
		tbl_book_loans.dateOut		
	FROM tbl_book_loans
	RIGHT OUTER JOIN tbl_borrower ON tbl_borrower.pk_cardNo = tbl_book_loans.fk_cardNo
	WHERE tbl_book_loans.dateOut IS NULL 
END
;

EXEC spNoCheckOut

Stored Proc #4

CREATE PROC spSharpstownDueToday
AS
BEGIN
	SELECT	
		tbl_library_branch.branchName,
		tbl_book.title,
		tbl_book_loans.dueDate,		
		tbl_borrower.name,
		tbl_borrower.address
	FROM tbl_library_branch
	INNER JOIN tbl_book_loans ON tbl_book_loans.fk_branchID = tbl_library_branch.pk_branchID
	INNER JOIN tbl_book ON tbl_book_loans.fk_bookID = tbl_book.pk_bookID
	INNER JOIN tbl_borrower ON tbl_book_loans.fk_cardNo = tbl_borrower.pk_cardNo
	WHERE tbl_book_loans.dueDate = '07-17-2017'	
END
;

EXEC spSharpstownDueToday

Stored Proc #5

ALTER PROC spTotalBookLoans
AS
BEGIN
	SELECT tbl_library_branch.branchName AS 'Branch Name',
	COUNT (*) AS 'Total Book Loans'
	FROM tbl_library_branch
	INNER JOIN tbl_book_loans ON tbl_library_branch.pk_branchId = tbl_book_loans.fk_branchId
	GROUP BY tbl_library_branch.branchName
END
;

EXEC spTotalBookLoans

Stored Proc #6

CREATE PROC sp5PlusBookReaders
AS
BEGIN
	SELECT
		tbl_borrower.name AS 'Borrower',
		tbl_borrower.address AS 'Address',
		COUNT (*)
	FROM
		tbl_book_loans
	INNER JOIN tbl_borrower ON tbl_book_loans.fk_cardNo = tbl_borrower.pk_cardNo
	GROUP BY tbl_borrower.name, tbl_borrower.address
END
;

EXEC sp5PlusBookReaders

Stored Proc #7

CREATE PROC spStephenKingAtCentral
AS
BEGIN
	SELECT
		tbl_library_branch.branchName AS 'Library Branch',
		tbl_book_authors.authorName AS 'Author',
		tbl_book.title AS 'Book Title',
		tbl_book_copies.no_of_copies AS 'Copies'	
	FROM
		tbl_library_branch
	INNER JOIN tbl_book_copies ON tbl_library_branch.pk_branchId = tbl_book_copies.fk_branchId
	INNER JOIN tbl_book ON tbl_book_copies.fk_bookId = tbl_book.pk_bookId
	INNER JOIN tbl_book_authors ON tbl_book.pk_bookId = tbl_book_authors.fk_bookId
	WHERE tbl_library_branch.branchName = 'Central' AND tbl_book_authors.authorName = 'Stephen King'
	GROUP BY tbl_library_branch.branchName,
		tbl_book_authors.authorName,
		tbl_book.title,
		tbl_book_copies.no_of_copies
END
;

EXEC spStephenKingAtCentral










