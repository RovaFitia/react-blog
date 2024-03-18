import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";

const Sidebar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]) ;
    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setPopularBlogs(data.slice(0, 15)))
    }, []);

    // console.log(popularBlogs) ;
    return (
        <div>
            {/* Latest blogs */}
            <div>
                <h3 className="text-2xl font-semibold px-2">Latest Blogs</h3>
                <div>
                    {
                        popularBlogs.slice(0, 5).map(blog => <div key={blog.id} className="sidebar px-4 my-5 pb-4">
                                <h4 className="text-base pb-2">{blog.title}</h4>
                                <Link to="/"
                                      className="font-medium hover:text-orange-400 inline-flex items-center gap-2 py-1">Read
                                    more <FaArrowRight/> </Link>
                            </div>
                        )
                    }
                </div>
            </div>

            {/*  Popular Blogs :  */}
            <div>
                <h3 className="text-2xl font-semibold px-2 mt-20">Popular Blogs</h3>
                <div>
                    {
                        popularBlogs.slice(6, 10).map(blog => <div key={blog.id} className="sidebar px-4 my-5 pb-4">
                                <h4 className="text-base pb-2">{blog.title}</h4>
                                <Link to="/"
                                      className="font-medium hover:text-orange-400 inline-flex items-center gap-2 py-1">Read
                                    more <FaArrowRight/> </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;