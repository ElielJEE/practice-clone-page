import React from 'react'
import './Pagination.css';

const Pagination = ({ commentPerPage, totalComments, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalComments / commentPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} onClick={() => paginate(number)} className="page-number">
                            {number}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination