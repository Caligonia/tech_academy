
CREATE PROC spTheLostTribeAtSharpstown
AS
BEGIN
	SELECT 
		tbl_library_branch.branchName AS 'Branch',
		tbl_book.title AS 'Title',
		tbl_book_copies.no_of_copies AS 'Copies'		
	FROM
		tbl_book
	INNER JOIN tbl_book_copies ON tbl_book_copies.fk_bookId = tbl_book.pk_bookId
	INNER JOIN tbl_library_branch ON tbl_book_copies.fk_branchId = tbl_library_branch.pk_branchId
	WHERE tbl_book.title = 'The Lost Tribe' AND tbl_library_branch.branchName = 'Sharpstown'
END
;

CREATE PROC spTheLostTribeCopies @title VARCHAR(75)
-- EXEC spTheLostTribeCopies @title ='the lost tribe' --
-- This stored procedure can find any title --
AS
BEGIN
	SELECT 
		tbl_library_branch.branchName AS 'Branch',
		tbl_book.title AS 'Title',
		tbl_book_copies.no_of_copies AS 'Copies'		
	FROM
		tbl_book
	INNER JOIN tbl_book_copies ON tbl_book_copies.fk_bookId = tbl_book.pk_bookId
	INNER JOIN tbl_library_branch ON tbl_book_copies.fk_branchId = tbl_library_branch.pk_branchId
	WHERE tbl_book.title LIKE '%'+@title+'%'
	ORDER BY tbl_library_branch.branchName, tbl_book.title ASC
END
;

CREATE PROC spNoCheckOut
AS
BEGIN
	SELECT  
		tbl_borrower.name AS 'Borrower',
		tbl_book_loans.dateOut AS 'Date Out'
	FROM tbl_book_loans
	RIGHT OUTER JOIN tbl_borrower ON tbl_borrower.pk_cardNo = tbl_book_loans.fk_cardNo
	WHERE tbl_book_loans.dateOut IS NULL 
END
;

CREATE PROC spSharpstownDueToday
AS
BEGIN
	SELECT	
		tbl_library_branch.branchName AS 'Branch',
		tbl_book.title AS 'Title',
		tbl_book_loans.dueDate AS 'Date Due',		
		tbl_borrower.name AS 'Borrower',
		tbl_borrower.address AS 'Address'
	FROM tbl_library_branch
	INNER JOIN tbl_book_loans ON tbl_book_loans.fk_branchId = tbl_library_branch.pk_branchId
	INNER JOIN tbl_book ON tbl_book_loans.fk_bookId = tbl_book.pk_bookId
	INNER JOIN tbl_borrower ON tbl_book_loans.fk_cardNo = tbl_borrower.pk_cardNo
	WHERE tbl_book_loans.dueDate = '07-17-2017'	
END
;

CREATE PROC spTotalBookLoans
AS
BEGIN
	SELECT tbl_library_branch.branchName AS 'Branch',
	COUNT (*) AS 'Book Loans'
	FROM tbl_library_branch
	INNER JOIN tbl_book_loans ON tbl_library_branch.pk_branchId = tbl_book_loans.fk_branchId
	GROUP BY tbl_library_branch.branchName
END
;

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

CREATE PROC spStephenKingAtCentral
AS
BEGIN
	SELECT
		tbl_library_branch.branchName  AS 'Branch',
		tbl_book_authors.authorName AS 'Author',
		tbl_book.title AS 'Title',
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
