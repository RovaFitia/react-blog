import React from 'react';
import Banner from "../components/Banner.jsx";
import BlogPage from "../components/BlogPage.jsx";

const Home = () => {
    const datas = {
        title: "Welcome to Our Blog",
        text: "Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials."
    }
    return (
        <div>
            <Banner title={datas.title} text={datas.text} link="/"/>
            <div className="max-w-7xl mx-auto">
                <BlogPage/>
            </div>
        </div>
    );
};

export default Home;