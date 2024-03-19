import React from 'react';
import {useLoaderData} from "react-router-dom";
import Banner from "../components/Banner.jsx";
import {FaUser} from "react-icons/fa6";
import {FaClock} from "react-icons/fa";
import Sidebar from "../components/Sidebar.jsx";

const SingleBlog = () => {
    const data = useLoaderData() ;
    const {title, image, category, author, published_date, reading_time, content} = data[0] ;

    return (
        <div>
            <Banner title="Single Blog Page" />
            {/* Blog details */}
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className="lg:w-3/4 mx-auto">
                    <div>
                        <img src={image} alt={title} className="w-full mx-auto rounded"/>
                    </div>
                    <h2 className="text-3xl font-bold my-4 text-blue-500">{title}</h2>
                    <p className="mb-3 text-sm text-gray-600"><FaUser className="inline-flex items-center mb-1 mr-2"/> {author} | {published_date}</p>
                    <p className="mb-3 text-sm text-gray-600"><FaClock className="inline-flex items-center mb-1 mr-2"/> {reading_time}</p>
                    <p className="text-base text-gray-500 mb-6">{content}</p>
                    <div className="text-base text-gray-500 mb-6 text-justify">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio dolorem eligendi exercitationem iusto labore maiores nihil numquam obcaecati porro rem, sint veritatis. Aspernatur consequuntur, et iure laboriosam nesciunt obcaecati qui quidem. Dolorem incidunt pariatur quasi recusandae, sapiente tempora vitae? Ad est fuga libero necessitatibus recusandae. A adipisci aliquam aliquid amet architecto assumenda aut beatae delectus dicta dignissimos dolore eaque error est eum ex exercitationem fugit, inventore nemo non odio odit perspiciatis quis reprehenderit sequi, similique suscipit temporibus? Ad alias asperiores commodi debitis deserunt eligendi est, excepturi exercitationem facere fugit modi nobis, perferendis provident rem repudiandae sapiente tempora, tempore voluptas?</p> <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio dolorem eligendi exercitationem iusto labore maiores nihil numquam obcaecati porro rem, sint veritatis. Aspernatur consequuntur, et iure laboriosam nesciunt obcaecati qui quidem. Dolorem incidunt pariatur quasi recusandae, sapiente tempora vitae? Ad est fuga libero necessitatibus recusandae. A adipisci aliquam aliquid amet architecto assumenda aut beatae delectus dicta dignissimos dolore eaque error est eum ex exercitationem fugit, inventore nemo non odio odit perspiciatis quis reprehenderit sequi, similique suscipit temporibus? Ad alias asperiores commodi debitis deserunt eligendi est, excepturi exercitationem facere fugit modi nobis, perferendis provident rem repudiandae sapiente tempora, tempore voluptas?</p> <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio dolorem eligendi exercitationem iusto labore maiores nihil numquam obcaecati porro rem, sint veritatis. Aspernatur consequuntur, et iure laboriosam nesciunt obcaecati qui quidem. Dolorem incidunt pariatur quasi recusandae, sapiente tempora vitae? Ad est fuga libero necessitatibus recusandae. A adipisci aliquam aliquid amet architecto assumenda aut beatae delectus dicta dignissimos dolore eaque error est eum ex exercitationem fugit, inventore nemo non odio odit perspiciatis quis reprehenderit sequi, similique suscipit temporibus? Ad alias asperiores commodi debitis deserunt eligendi est, excepturi exercitationem facere fugit modi nobis, perferendis provident rem repudiandae sapiente tempora, tempore voluptas?</p> <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio dolorem eligendi exercitationem iusto labore maiores nihil numquam obcaecati porro rem, sint veritatis. Aspernatur consequuntur, et iure laboriosam nesciunt obcaecati qui quidem. Dolorem incidunt pariatur quasi recusandae, sapiente tempora vitae? Ad est fuga libero necessitatibus recusandae. A adipisci aliquam aliquid amet architecto assumenda aut beatae delectus dicta dignissimos dolore eaque error est eum ex exercitationem fugit, inventore nemo non odio odit perspiciatis quis reprehenderit sequi, similique suscipit temporibus? Ad alias asperiores commodi debitis deserunt eligendi est, excepturi exercitationem facere fugit modi nobis, perferendis provident rem repudiandae sapiente tempora, tempore voluptas?</p> <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio dolorem eligendi exercitationem iusto labore maiores nihil numquam obcaecati porro rem, sint veritatis. Aspernatur consequuntur, et iure laboriosam nesciunt obcaecati qui quidem. Dolorem incidunt pariatur quasi recusandae, sapiente tempora vitae? Ad est fuga libero necessitatibus recusandae. A adipisci aliquam aliquid amet architecto assumenda aut beatae delectus dicta dignissimos dolore eaque error est eum ex exercitationem fugit, inventore nemo non odio odit perspiciatis quis reprehenderit sequi, similique suscipit temporibus? Ad alias asperiores commodi debitis deserunt eligendi est, excepturi exercitationem facere fugit modi nobis, perferendis provident rem repudiandae sapiente tempora, tempore voluptas?</p>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;