import Banner from "../Banner/Banner";
import BookContainer from "../BookContainer/BookContainer";


const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <Banner/>
            <BookContainer/>
        </div>
    );
};

export default Home;