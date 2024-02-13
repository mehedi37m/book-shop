import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const UploadBook = () => {
   
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

const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const image = form.image.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const authorName = form.authorName.value;
    const bookPDF = form.bookPDF.value;

   const bookObj = {bookTitle, image, category, bookDescription, authorName, bookPDF}

   fetch("http://localhost:5000/upload-book", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(bookObj)
   })
     .then(res => res.json())
     .then(data => {
        alert('book uploaded successfully')
        form.reset();
     })
}


  return (
    <div className="px-4 my-12">
      <h1 className="mb-8 text-4xl font-bold">Upload A Book</h1>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
          />
        </div>
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
};

export default UploadBook;
