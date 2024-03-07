import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageBook = () => {
    const [allBooks, setAllBooks] = useState([]);
    console.log(allBooks)

    useEffect(() =>{
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])

   const handleDelete = (id) => {
    // console.log(id)
    fetch(`http://localhost:5000/book/${id}`,{
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        alert('Book deleted');
        // setAllBooks(data);
    })
   }


    return (
        <div className='px-4 my-12'>
             <h1 className="mb-8 text-4xl font-bold">Manage Your Books</h1>

             {/* table  */}
             <Table className='lg:w-[1180px]'>
        <Table.Head>
        <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {/* fetch data */}
        {
            allBooks.map((book,index)=> <Table.Body key={book._id} className="divide-y"> 
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
           
            <Table.Cell>{index}</Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell className='font-bold'>$1</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline mr-5 dark:text-cyan-500">
                Edit
              </Link>
              <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>)
        }
        {/* <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body> */}

      </Table>

        </div>
    );
};

export default ManageBook;