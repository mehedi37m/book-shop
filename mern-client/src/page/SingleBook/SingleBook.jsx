import { useLoaderData } from "react-router-dom";


const SingleBook = () => {


const {_id, bookTitle, image } = useLoaderData();

console.log(_id);



    return (
        <div>
            <img className="h-96" src={image} alt="" />
            <h1>{bookTitle}</h1>
        </div>
    );
};

export default SingleBook;