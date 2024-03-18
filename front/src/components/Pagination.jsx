import React from 'react';

const Pagination = ({onPageChange, blogs, currentPage, pageSize}) => {
    const totalPage = Math.ceil(blogs.length / pageSize) ;
    //console.log(totalPage) ;
    const renderPaginationLinks = () => {
        return Array.from({length: totalPage}, (_, i) => i + 1).map((pageNumber) => (
            <li key={pageNumber} className={pageNumber === currentPage ? "activerPagination" : ""}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        )) ;
    }
    return (
        <ul className="pagination my-8 flex gap-4">
            <li>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="previous"
                >
                    Previous
                </button>
            </li>
            <div className="flex gap-1">{renderPaginationLinks()}</div>
            <li>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPage}
                    className="next"
                >
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;