import { useEffect, useState } from "react";
import { getWishesBooksToLS } from "../LocalStorage/LocalStorage";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WishListBooks = () => {
    const [bookWishlist, setBookWishlist] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => {
                const storedBooks = getWishesBooksToLS();
                if (storedBooks && storedBooks.length > 0) {
                    const wishListBooks = storedBooks
                        .map(id => data.find(book => book.bookId === id))
                        .filter(book => book !== undefined);
                    setBookWishlist(wishListBooks);
                }
            })
            .catch(error => {
                console.error("Error fetching books:", error);
            });
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1">
                {bookWishlist.map((book, index) => (
                    <ul key={index} className="my-2 p-4 rounded-lg">
                       <div className="flex flex-row gap-3 w-full border-2 border-gray-100 rounded-s-xl">
                            <div className="w-2/12 ">
                                <img src={book.image} alt={book.bookName} className="h-full max-h-56 p-6 bg-gray-200 rounded-lg" />
                            </div>
                            <div className="w-10/12 px-4 ">
                                <h1 className="text-2xl font-medium">{book.bookName}</h1>
                                <h2 className="font-medium my-2">By: {book.author}</h2>
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center gap-2 ">
                                        <p className="font-bold">Tags: </p>
                                        {
                                            book.tags.map((tag, index) => (
                                                <ul key={index} className="px-3 py-1 font-semibold text-[#23BE0A] bg-gray-100 rounded-s-full rounded-e-full hover:bg-gray-200 hover:text-blue-600 hover:underline hover:cursor-pointer">
                                                    <li>#{tag}</li>
                                                </ul>
                                            ))
                                        }
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="px-1 py-2"><IoLocationOutline /></td>
                                                <td className="px-1 py-2">Year of Publishing: </td>
                                                <td className=" py-2">{book.yearOfPublishing}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex gap-5">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="px-1 py-2"><HiOutlineUsers /></td>
                                                <td className="px-1 py-2">Publisher: </td>
                                                <td className=" py-2">{book.publisher}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="px-1 py-2"><MdOutlineContactPage /></td>
                                                <td className="px-1 py-2">Page: </td>
                                                <td className=" py-2">{book.totalPages}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr className="my-2"/>
                                <div className="flex gap-3 my-3">
                                    <div className="flex justify-center items-center gap-2 px-3 py-1 bg-[#328EFF26] text-[#328EFF] rounded-s-full rounded-e-full">
                                        <p>Category: </p>
                                        <p>{book.category}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2 px-3 py-1  bg-[#FFAC3326] text-[#FFAC33] rounded-s-full rounded-e-full">
                                        <p>Rating: </p>
                                        <p>{book.rating}</p>
                                    </div>
                                    
                                    <Link to={`/booksDetails/${book.bookId}`}>
                                        <button className=" px-3 py-1  bg-[#23BE0A] text-white rounded-s-full rounded-e-full">View Details</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default WishListBooks;
