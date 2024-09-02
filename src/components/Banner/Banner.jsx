import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="my-10 flex flex-col-reverse md:flex-row md:justify-between h-full md:h-[554px] w-full max-w-[1170px] px-8 md:px-28 py-8 md:py-16 rounded-lg bg-[#f9f9f9]">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-10">
                <h1 className="text-3xl md:text-6xl font-bold">Books to freshen up your bookshelf</h1>
                <Link to="/listedBook">
                    <a className="btn bg-[#23BE0A] text-white px-7 py-4 rounded-lg">View The List</a>
                </Link>
            </div>

            <div className="w-full md:w-1/2 flex justify-end items-center">
                <img src={'/Banner.png'} alt="banner photo" className="h-full w-auto rounded-lg"/>
            </div>
        </div>
    );
};

export default Banner;
