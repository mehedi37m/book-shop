import { useEffect, useState } from "react";
import BookCards from "./BookCards";


const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);

    
    useEffect(() =>{
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(0,6)))
    },[])
    
    return (
        <div>
            <BookCards books={books} headline="Best Selling Books" ></BookCards>
        </div>
    );
};

export default FavoriteBooks;