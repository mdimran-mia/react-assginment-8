import { useEffect, useState } from "react";
import { getReadBooksToLS } from "../LocalStorage/LocalStorage";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from 'recharts';
import PropTypes from 'prop-types';

const PagesToRead = () => {
    const [readBookList, setReadBookList] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => {
                const storedBooks = getReadBooksToLS();
                if (storedBooks && storedBooks.length > 0) {
                    const readBooks = storedBooks
                        .map(id => data.find(book => book.bookId === id))
                        .filter(book => book !== undefined);
                    setReadBookList(readBooks);
                }
            })
            .catch(error => {
                console.error("Error fetching books:", error);
            });
    }, []);

    const getBarColor = (index) => {
        const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"];
        return colors[index % colors.length]; 
    };

    const chartData = readBookList.map((book, index) => ({
        name: book.bookName,
        totalPages: book.totalPages,
        fill: getBarColor(index)
    }));

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const CustomTooltip = ({ payload, label, active }) => {
        if (active) {
            return (
                <div className="custom-tooltip bg-gray-200 p-2 border rounded">
                    <p className="label font-bold">{`${label} : ${payload[0].value} pages`}</p>
                </div>
            );
        }
        return null;
    };

    const renderPageNumber = (props) => {
        const { x, y, value, width } = props;
        return (
            <text
                x={x + width / 2}
                y={y - 5}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={12}
                fontWeight="bold"
            >
                {value}
            </text>
        );
    };

    return (
        <div className="w-full max-[1170px] flex flex-col justify-center items-center mx-auto">
            <div className="mt-10">
                <BarChart width={900} height={450} data={chartData}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />}>
                        <LabelList dataKey="totalPages" content={renderPageNumber} />
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

PagesToRead.propTypes = {
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    payload: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.number.isRequired,
    label: PropTypes.string,
    active: PropTypes.bool,
}

export default PagesToRead;
