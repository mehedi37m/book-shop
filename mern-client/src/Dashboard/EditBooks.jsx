import React from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from "react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, image, category, bookDescription , bookPDF} = useLoaderData();

  console.log(id)

  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Mistakes",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiographic",
    "History",
    "Self-Help",
    "Memoirs",
    "Business",
    "Children",
    "Education",
    "Travel",
    "Sports",
    "Money",
    "family",
]
const [selectBook, setSelectedBook] = useState(bookCategory[0]);

 const handleChangeSelectValue = (event) =>{
     console.log(event.target.value);
     setSelectedBook(event.target.value);
 }

// const handleUpdate = (event) =>{
//     event.preventDefault();
//     const form = event.target;
//     const bookTitle = form.bookTitle.value;
//     const image = form.image.value;
//     const category = form.categoryName.value;
//     const bookDescription = form.bookDescription.value;
//     const authorName = form.authorName.value;
//     const bookPDF = form.bookPDF.value;

//    const updateBookObj = {bookTitle, image, category, bookDescription, authorName, bookPDF}

//    fetch(`http://localhost:5000/book/${id}`, {
//     method: "PATCH",
//     headers: {
//         "content-type": "application/json",
//     },
//     body: JSON.stringify(updateBookObj)
//    })
//      .then(res => res.json())
//      .then(data => {
//         alert('book updated successfully')  
//      })
// }

const handleUpdate = (event) => {
  event.preventDefault();
  const form = event.target;
  const updatedBook = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      image: form.image.value,
      category: form.categoryName.value,
      bookDescription: form.bookDescription.value,
      bookPDF: form.bookPDF.value
  };

  fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
  })
  .then(res => {
      if (!res.ok) {
          throw new Error('Network response was not ok');
      }
      return res.json();
  })
  .then(data => {
      alert('Book updated successfully');
  })
  .catch(error => {
      console.error('Error updating book:', error);
      alert('An error occurred while updating the book. Please try again.');
  });
}


  return (
    <div className="px-4 my-12">
      <h1 className="mb-8 text-4xl font-bold">Update the Book Data</h1>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
       {/* 1st row */}
        <div className="flex gap-8">
             {/* bookTitle */}
      <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput
            id="bookTitle"
            name="bookTitle"
            type="text"
            placeholder="Book Name"
            required
            defaultValue={bookTitle}
          />
        </div>
        {/* author name */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput
            id="authorName"
            name="authorName"
            type="text"
            placeholder="Author Name.."
            required
            defaultValue={authorName}
          />
       
          </div>
        </div>    
        {/* 2nd row  */}
        <div className="flex gap-8">
      <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="image" value="Add Image" />
          </div>
          <TextInput
            id="image"
            name="image"
            type="text"
            placeholder="image"
            required
            defaultValue={image}
          />
        </div>
        {/* category name */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>

          <Select id="inputState" name="categoryName" className="w-full rounded" value={selectBook} onChange={handleChangeSelectValue}>

            {
                bookCategory.map((option) => <option key={option} value={option}>{option}</option>)
            }

          </Select>
         
       
          </div>
        </div>  
        {/* 3rd row     */}
        <div>
        <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            rows={4}
            placeholder="Book Description"
            required
            className="w-full"
            defaultValue={bookDescription}
          />
        </div>
        {/* 4th row  */}
        <div>
        <div className="mb-2 block">
            <Label htmlFor="bookPDF" value="Add Book PDF" />
          </div>
          <TextInput
            id="bookPDF"
            name="bookPDF"
            type="text"
            placeholder="Book PDF"
            required
            defaultValue={bookPDF}
          />
        </div>
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );

}

export default EditBooks