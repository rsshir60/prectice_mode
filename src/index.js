
import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import { books } from './books';
import Book from './Book';








function BookList() {
    return (
        <section className='bookList'>

           {books.map((book,index) =>{
            const {title,author,img,info,id} = book;
            return <Book key = {id} book = {book}/>
           })}

           
        </section>
        
        

    );

}


const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>) 