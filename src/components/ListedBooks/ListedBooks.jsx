import Tab from "../Tab/Tab";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl w-full max-w-[1170px] text-center font-bold my-6 bg-gray-300 rounded-xl py-4 ">Books</h1>
                <details className="dropdown mb-14">
                    <summary className="btn m-1 bg-[#23BE0A] hover:bg-[#23BE0A] text-white"><span className="mr-2">Sort By</span> <IoIosArrowDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of Page</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="w-full max-w-[1170px] mx-auto">
                <Tab />
            </div>
        </div>
    );
};

export default ListedBooks;