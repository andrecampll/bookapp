export function sliceTitles(bookTitle: string) {
  const words = bookTitle.split(' ').length;

  console.log(bookTitle.split(' '))

  if (words === 6) {
    return bookTitle.slice(0, 6);
  }

  if (words > 4) {
    return bookTitle.slice(0, 14);
  } else {
    return bookTitle.slice(0, 26);
  }
}
