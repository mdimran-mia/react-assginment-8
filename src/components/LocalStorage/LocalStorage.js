const getReadBooksToLS = () => {
    const storedBooks = localStorage.getItem('stored-read-books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
};

const saveReadBookToLS = id => {
    const storedBooks = getReadBooksToLS();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('stored-read-books', JSON.stringify(storedBooks));
    }
};

const getWishesBooksToLS = () => {
    const storedBooks = localStorage.getItem('stored-wishes-books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
};

const saveWishesBookToLS = id => {
    const storedBooks = getWishesBooksToLS();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('stored-wishes-books', JSON.stringify(storedBooks));
    }
};

const removeBookFromWishesLS = id => {
    const storedBooks = getWishesBooksToLS();
    const updatedBooks = storedBooks.filter(bookId => bookId !== id);
    localStorage.setItem('stored-wishes-books', JSON.stringify(updatedBooks));
};

const removeBookFromReadLS = id => {
    const storedBooks = getReadBooksToLS();
    const updatedBooks = storedBooks.filter(bookId => bookId !== id);
    localStorage.setItem('stored-read-books', JSON.stringify(updatedBooks));
};

export { getReadBooksToLS, saveReadBookToLS, getWishesBooksToLS, saveWishesBookToLS, removeBookFromWishesLS, removeBookFromReadLS };
