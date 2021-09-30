import React from 'react';

const SearchBar = ({ setQuery, query }) => {
    function handleOnSearch({ currentTarget = {} }) {
        const { value } = currentTarget;
        setQuery(value);
    }
    return (
        <div className="p-8">
            <div className="bg-white flex items-center rounded-full shadow-xl">
                <input name="search"
                    type="search"
                    placeholder="Search for an emoji. Ex: heart"
                    autoComplete="off"
                    className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                    id="search" 
                    value={query} 
                    onChange={handleOnSearch} />
                <div className="p-4">
                </div>
            </div>
        </div>
    );
}

export default SearchBar;