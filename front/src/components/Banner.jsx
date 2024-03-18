import React from 'react';
import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";

const Banner = (props) => {
    return (
        <div className="px-4 py-32 bg-blue-950 mx-auto">
            <div className="text-gray-50 text-center">
                <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">{props.title}</h1>
                {
                    props.text ? <p className="text-gray-300 lg:w-3/5 mx-auto mb-5 font-primary">{props.text}</p> : ""
                }
                {
                    props.link ? <div>
                        <Link to={props.link} className="font-medium hover:text-orange-400 inline-flex items-center gap-2 py-1">Learn more <FaArrowRight/> </Link></div> : ""
                }

            </div>
        </div>
    );
};

export default Banner;