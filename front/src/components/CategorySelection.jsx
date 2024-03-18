import React from 'react';

const CategorySelection = ({onSelectedCategory, activeCategory}) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"] ;
    return (
        <div className="cat px-4 mb-8 lg:space-x-16 flex flex-wrap items-center py-5 text-gray-800">
            <button
                onClick={() => onSelectedCategory(null)}
                className={`lg:ml-12 mr-2 ${!activeCategory ? "active-button" : ""}`}
            >
                All
            </button>
            {
                categories.map((category) => (
                    <button
                        className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
                        key={category}
                        onClick={() => onSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    );
};

export default CategorySelection;