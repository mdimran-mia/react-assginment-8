import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { getReadBooksToLS, saveReadBookToLS, getWishesBooksToLS, saveWishesBookToLS, removeBookFromWishesLS } from "../LocalStorage/LocalStorage";

const BooksDetails = () => {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(null);
    const { id } = useParams();
    books

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                const foundBook = data.find(book => book.bookId.toString() === id);
                setBook(foundBook);
            })
            .catch(error => {
                console.error("Error fetching books:", error);
            });
    }, [id]);
    console.log(id);

    const handleReadBtn = () => {
        if (!book) return;

        if (getReadBooksToLS().includes(parseInt(id))) {
            toast.info("This book is already in your Read list.");
        } else {
            // Add to read list
            saveReadBookToLS(parseInt(id));
            toast.success("Book added to your Read list!");

            // Remove from wishlist if it's there
            if (getWishesBooksToLS().includes(parseInt(id))) {
                removeBookFromWishesLS(parseInt(id));
                toast.info("Book removed from your Wishlist.");
            }
        }
    };

    const handleWishesBtn = () => {
        if (!book) return;

        if (getReadBooksToLS().includes(parseInt(id))) {
            Swal.fire({
                icon: 'error',
                title: 'Already Read',
                text: 'This book is already in your Read list and cannot be added to the Wishlist.',
            });
        } else if (getWishesBooksToLS().includes(parseInt(id))) {
            toast.info('This book is already in your Wishlist.');
        } else {
            saveWishesBookToLS(parseInt(id));
            toast.success('Book added to your Wishlist!');
        }
    };

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="flex w-[1170px] justify-center mx-auto gap-8 mt-10">
            <div className="w-1/2 rounded-xl h-full max-h-[650px] overflow-hidden">
                <img src={book.image} alt={book.bookName} className="rounded-xl mx-auto h-full max-h-[650px] w-auto object-cover" />
            </div>

            <div className="w-1/2 px-5">
                <h2 className="text-4xl font-bold">{book.bookName}</h2>
                <p className="font-bold my-3"><span>By: </span>{book.author}</p>
                <hr />
                <p className="my-3">{book.category}</p>
                <hr />
                <p className="my-3"><span className="font-bold">Review: </span>{book.review}</p>
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
                <hr className="my-3" />
                <table className="min-w-full border-collapse border border-gray-200">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Number of Pages</td>
                            <td className="border border-gray-300 px-4 py-2">{book.totalPages} Pages</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Publisher</td>
                            <td className="border border-gray-300 px-4 py-2">{book.publisher}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Year of Publishing</td>
                            <td className="border border-gray-300 px-4 py-2">{book.yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Rating</td>
                            <td className="border border-gray-300 px-4 py-2">{book.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex flex-col md:flex-row gap-2 mt-5">
                    <button onClick={handleReadBtn} className="btn border-2 border-gray-900 bg-white px-7 py-4 hover:bg-white">Read</button>
                    <button onClick={handleWishesBtn} className="btn bg-[#59C6D2] text-white px-7 py-4 hover:text-black hover:bg-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BooksDetails;
