import { useEffect, useState } from "react";
import BookCards from "../FavoriteBooks/BookCards";


const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    
    useEffect(() =>{
        fetch('https://book-store-server-two.vercel.app/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(4,8)))
    },[])
    
    return (
        <div>
            <BookCards books={books} headline="Other Books" ></BookCards>
        </div>
    );
};

export default OtherBooks;