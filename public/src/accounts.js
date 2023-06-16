//It returns the account object that has the matching ID.

function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id === id)}

//It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.

function sortAccountsByLastName(accounts) {
  accounts.sort((userA, userB) =>{
    return userA.name.last.toLowerCase() < userB.name.last.toLowerCase() ? -1 : 1}
  );
  return accounts;
}

//the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let total = 0;

  for (const book of books) {
    const borrows = book.borrows;
    for (const borrow in borrows) {
      if (borrows[borrow].id === accountId) {
        total += 1;
      }
    }
  }

  return total;
}

//It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.


















function getBooksPossessedByAccount(account, books, authors) {
  //initialize account.id 
  const accountId = account.id;
  //use filter method to collect books.borrows.id === account.id
  const borrowed = books.filter((book) => {
    const recentBorrow = book.borrows[0];
    return recentBorrow.id === accountId ;
  });
  //map a new object => that nests the author object inside the remaining book objs if they're = authorId
  const checkedOut = borrowed.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
  
  return checkedOut;
}

/* result should look like:
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
