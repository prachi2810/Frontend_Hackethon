
import React, { useState } from 'react'
import Template from './Template'

function Gallery({ templates, templatesPerPage, totaltemplates}) {
 
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * templatesPerPage;
    const indexOfFirstPost = indexOfLastPost - templatesPerPage;
    const currenttemplates = templates.slice(indexOfFirstPost, indexOfLastPost);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
     
    };
  
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totaltemplates / templatesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className='container'>
        <div className='row'>
          {currenttemplates.map((post) => (
            <Template key={post._doc._id} thumbnail={post.thumbnail} name={post._doc.name} id={post._doc._id} />
          ))}
        </div >
        <div className='row' >
          <div className='col' >
            <div className='pagination' >
              {pageNumbers.map((number) => (
                <div className='page-item'
                  key={number}
                  active={number === currentPage}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </div >
              ))}
            </div>
          </div >
        </div >
      </div>
    );
  
}

export default Gallery
