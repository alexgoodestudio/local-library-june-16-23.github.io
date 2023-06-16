function getTotalBooksCount(books) {
  let count = 0;
  for (let book in books) {
    count++;
  }
  return count;
}

function getTotalAccountsCount(accounts) {
  let count = 0;
  for(let account in accounts){
    count++
  }
  return count
}

function getBooksBorrowedCount(books) {
  let count = 0;
  for (let book of books) {
    if (book.borrows[0].returned === false) {
      count++;
    }
  }
  return count;
}

  //It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
  function getMostCommonGenres(books) {
    const commonGenres = books.reduce((accum, { genre }) => {
      if (accum[genre] === undefined) {
        accum[genre] = 1;
      } else {
        accum[genre] += 1;
      }
      return accum;
    }, {});
  
    const result = [];
    for (let genreKey in commonGenres) {
      let obj = { name: genreKey, count: commonGenres[genreKey] };
      result.push(obj);
    }
    console.log(result)
    result.sort((a, b) => b.count - a.count);
  
    return result.slice(0, 5);
    
  }

/*
  [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
    ...
  ]
*/

function getMostPopularBooks(books) {
  const newObjs = books.map((bookObj)=>{
    const {title,borrows} = bookObj
    return {name: title, count:borrows.length}
  })
  newObjs.sort((a,b)=> b.count - a.count)
  return newObjs.slice(0,5)
}
 

function getMostPopularAuthors(books =[], authors=[]) {
  const sorter= books.sort((elementA,elementB)=>{
    return elementB.borrows.length - elementA.borrows.length
  })
    const topFive = sorter.slice(0,5)
  
    const results = []
    topFive.forEach((bookObj)=>{
    const {authorId, borrows} = bookObj
    const authorIdMatcher = authors.find((authorObj) => authorObj.id === authorId)
    const obj ={name: nameHelper(authorIdMatcher), count:borrows.length}
    // console.log(obj)
    results.push(obj)
  })
  return results;
}
function nameHelper(author={}) {
    return `${author.name.first} ${author.name.last}`
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
