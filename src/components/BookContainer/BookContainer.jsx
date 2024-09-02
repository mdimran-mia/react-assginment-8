import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const BookContainer = () => {
    const [books, setBooks] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    const displayedBooks = showAll ? books : books.slice(0, 6);

    return (
        <div className="mb-20">
            <h2 className="text-5xl font-bold text-center mb-5">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly gap-6 w-full max-w-[1170px]">
                {displayedBooks.map(book => (
                    <div key={book.bookId} className="rounded-lg">
                        <Link to={`/booksDetails/${book.bookId}`}>
                            <div className="card bg-base-100 w-full shadow-xl border-2 border-gray-100">
                                <figure className="w-96 px-5 pt-5">
                                    <img src={book.image} alt={book.bookName} className="rounded-xl max-h-[230px] w-auto" />
                                </figure>
                                <div className="card-body items-start text-start">
                                    <div>
                                        <div className="flex justify-start items-center gap-2 ">
                                            <p className="font-bold">Tags: </p>
                                            {
                                                book.tags.map((tag, index) => (
                                                    <ul key={index} className="px-3 py-1 font-semibold text-[#23BE0A] bg-gray-100 rounded-s-full rounded-e-full hover:bg-gray-200 hover:text-blue-600 hover:underline hover:cursor-pointer">
                                                        <li>#{tag}</li>
                                                    </ul>
                                                ))
                                            }
                                        </div>
                                        <h2 className="card-title text-2xl my-2 font-bold">{book.bookName}</h2>
                                        <p className="font-medium"><span>By: </span>{book.author}</p>
                                        <hr className="my-5 border-1 border-dashed border-gray-400" />
                                        <div className="flex justify-between">
                                            <p className="">{book.category}</p>
                                            <p className="flex gap-1 justify-end items-center">{book.rating}<span className="text-2xl font-medium"><CiStar /></span></p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-center mx-auto">
                {!showAll && (
                    <button className="btn btn-secondary mt-6" onClick={() => setShowAll(true)} > Show All </button>
                )}
            </div>
        </div>
    );
};

export default BookContainer;
