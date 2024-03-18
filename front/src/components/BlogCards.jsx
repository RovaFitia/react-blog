import React from 'react';
import {Link} from "react-router-dom";
import {FaUser} from "react-icons/fa6";

const BlogCards = ({blogs, currentPage, pageSize, selectedCategory}) => {
    const filterBlogs = blogs
        .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    ;
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {
                filterBlogs.map((blog)=> <Link to={blog.id} key={blog.id} className="p-5 shadow-lg cursor-pointer">
                    <div>
                        <img src={blog.image} alt={blog.title} className="w-full"/>
                        <h3 className="mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer">{blog.title}</h3>
                        <p className="mb-2 text-gray-600"><FaUser className="inline-flex items-center mr-2"/> {blog.author}</p>
                        <p className="text-sm text-gray-500">Published : {blog.published_date}</p>
                    </div>

                </Link>)
            }
        </div>
    );
};

export default BlogCards;