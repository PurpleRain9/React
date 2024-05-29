import Books from "./Books";
import { useState } from "react";
import books from "../books";

const BookLists = () => {
     // Jsx Css / Tailwind Css in the nest Components;
     const articleStyles = 'bg-white border p-6 rounded-md mx-3 my-4 flex flex-col justify-center items-center shadow-md w-[300px]';
     const title = 'The End of Everything: How Wars Descend into Annihilation';
     const image = 'https://images-na.ssl-images-amazon.com/images/I/81MYaU742TL._AC_UL900_SR900,600_.jpg';
     const author = 'Victor Davis Hanson';

     

     const findBooks = (id) => {
        console.log(`this is ${id}`);
        const book = books.find((book) => book.id  === id);
        console.log(`book ${book.image}`);
        console.log(book);

     }

     const booksMap = books.map((book) => {
        
        // Adding to childern elements in the Books Components;
        return <Books key={book.id} id={book.id} findBooks={findBooks} title={book.title} image={book.image} author={book.author} articleStyles={articleStyles} >{book.author == 'Kristin Hannah' ? <p className="text-xs text-center mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reiciendis nulla optio, doloribus recusandae necessitatibus, ut consequatur natus odit ea perspiciatis quibusdam itaque. Veritatis ipsum recusandae, atque tempore distinctio beatae.</p> : ''}</Books>
     })
    return (
        <div className="flex flex-col justify-center items-center h-[100%]">
            <FormSearch />
            <section className="flex-wrap md:flex-nowrap flex justify-evenly mt-10">
           
                {booksMap}
                {/* <Books title={title} image={image} author={author} articleStyles={articleStyles} />
                <Books title={title} image={image} author={author} articleStyles={articleStyles} />
                <Books title={title} image={image} author={author} articleStyles={articleStyles} /> */}
            </section>
        </div>
    );

   
}

const FormSearch = () => {

     // Step 2: Create state variables for the input value
     const [inputValue, setInputValue] = useState('');

    const searchHandle = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
        // console.log(inputValue, 'this is inputvalues');
    }

    const handleClick  = () => {
        alert(`this is search values => ${ inputValue   }`,);
        console.log('this is click search values =>' , inputValue);
    }
    // const handleFormSubmission = (e) => {
    //     e.preventDefault();
    //     alert('submittion form')

    // }

    return(
        <>
            <div >
                <input onChange={searchHandle} type="text" className="bg-white rounded-md" />
                {/* <button type="submit" className='bg-blue-400 border rounded-md ml-2 text-white uppercase w-20'>Click</button> */}
                <button onClick={handleClick} type="button" className='bg-blue-400 border rounded-md ml-2 text-white uppercase w-20'>Click</button>

            </div>
        </>
    );
}

export default BookLists;