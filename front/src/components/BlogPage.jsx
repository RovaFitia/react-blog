import React, {useEffect, useState} from 'react';
import BlogCards from "./BlogCards.jsx";
import Pagination from "./Pagination.jsx";
import CategorySelection from "./CategorySelection.jsx";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]) ;
    const [currentPage, setCurrentPage] = useState(1) ;
    const pageSize = 12 ; // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null) ;
    const [activeCategory, setActiveCategory] = useState(null) ;

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}` ;

            // filter category :
            if(selectedCategory) {
                url += `&category=${selectedCategory}`
            }
            const response = await fetch(url) ;
            const data = await response.json() ;
            setBlogs(data) ;
        }
        fetchBlogs().then();
    }, [currentPage, pageSize, selectedCategory]);

    // Page changing btn
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber) ;
    }

    // Category changing filter
    const handleCategoryChange = (category) => {
        setSelectedCategory(category) ;
        setCurrentPage(1) ;
        setActiveCategory(category) ;
    }

    return (
        <div>
            {/* category section */}
            <div>
                <CategorySelection
                    onSelectedCategory={handleCategoryChange}
                    selectedCategory={selectedCategory}
                    activeCategory={activeCategory}
                />
            </div>

            {/* blog card section */}
            <div>
                <BlogCards
                    blogs={blogs}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    selectedCategory={selectedCategory}
                />
            </div>

            {/* Pagination section */}
            <div>
                <Pagination
                    onPageChange={handlePageChange}
                    blogs={blogs}
                    currentPage={currentPage}
                    pageSize={pageSize}/>
            </div>
        </div>
    );
};

export default BlogPage;