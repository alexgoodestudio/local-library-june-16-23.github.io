function findAuthorById(authors, id) {
  //It returns the author object that has the matching ID.
  return authors.find((authorId) => authorId.id === id);
  }

function findBookById(books, id) {
  return books.find((bookId) => bookId.id === id);
}

//returns an array with two arrays inside of it. The first array contains book objects that represent the books _that are currently checked out_,
// while the second array contains book objects that represent the books _that have been returned._ 

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((bookObj) => bookObj.borrows[0].returned === false);
  const returned = books.filter((bookObj) => bookObj.borrows[0].returned === true);

  return [checkedOut, returned];
}

// function partitionBooksByBorrowedStatus(books) {  
//   let data = []
//   const returned = []
//   const checkedOut = []

//   for (let book of books){
//     const {borrows} = book 
//     if(borrows[0].returned === false){
//       checkedOut.push(book)
//     }

//     if(borrows[0].returned === true){
//       returned.push(book)
//     }
//   }
//   data.push(checkedOut)
//   data.push(returned)

//   return data
// }


  //- A book object / An array of all account objects.
  //given a book object, return corresponding account objects of 10 or few that exist in the book borrows array,


  function getBorrowersForBook(book, accounts) {
    const { borrows } = book;
    const result = [];
  
    borrows.forEach((borrow) => {
      if (result.length >= 10) return;
      const { id, returned } = borrow;
      const account = accounts.find((accObj) => {
        return accObj.id === id
      });
      const accountMatches = { ...account, returned };
      result.push(accountMatches);
    });
  
    return result;
  }

  // function getBorrowersForBook(book, accounts) {
  //   const { borrows } = book;
  //   const result = [];
  
  //   for (const borrow of borrows) {
  //     if (result.length >= 10) break;
  //     const { id, returned } = borrow;
  //     const account = accounts.find((accObj) => accObj.id === id);
  //     const accountMatches = { ...account, returned };
  //     result.push(accountMatches);
  //   }
  
  //   return result;
  // }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
