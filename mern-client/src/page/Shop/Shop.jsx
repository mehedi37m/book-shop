import { useEffect, useState } from "react";

import { Card } from 'flowbite-react';


const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('https://book-store-server-two.vercel.app/all-books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="mt-28 px-4 lg:px-24">

            <h1 className="text-5xl font-bold text-center">All Books Are Here...</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12">
                {
                   books.map(book =><Card key={book.id}>
                    <img src={book.image} alt="" className="h-96" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>{book.bookTitle}</p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                     {book.authorName}
                    </p>
                    <button className="bg-blue-600 font-semibold text-white py-2 rounded">Buy Now</button>
                  </Card>) 
                }
            </div>
        </div>
    );
};

export default Shop;