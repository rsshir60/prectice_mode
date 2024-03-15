import React from 'react'
import { books } from './books'

const Book =(props) =>{
    const sampleex = (author) => {
        console.log(author )
    }
  const {img , title , author,info}= props.book

  return (
    
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{info}</p>
      <button type='button'onClick ={()=> sampleex(author)}>see authors in console</button>
    </article>
   
  );
}



export default Book