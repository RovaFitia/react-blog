import React from 'react';
import Banner from "../components/Banner.jsx";
import BlogPage from "../components/BlogPage.jsx";

function Blogs(props) {
    return (
        <div>
            <Banner title="Blog page" />

            {/* blog container */}
            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </div>
    );
}

export default Blogs;