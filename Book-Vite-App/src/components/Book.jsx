import React from 'react';
import '../App.css';

const Book = () => {
  return (
    <div className='card'>
      <img
        src="https://dailytipsenglish.com/wp-content/uploads/2023/11/three-books-near-bookshelf.webp"
        width="200"
        height="100"
        alt="book"
      />
      <h3>Title</h3>
      <h4>Price: 671</h4>
      <button>Add To Cart</button>
    </div>
  );
};

export default Book;
