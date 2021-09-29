import React from 'react';

const SearchBar = ({ setQuery, query }) => {
    function handleOnSearch({ currentTarget = {} }) {
        const { value } = currentTarget;
        setQuery(value);
    }
    return (
        <div class="p-8 border-2 border-red-500"  >
            <div class="bg-white flex items-center rounded-full shadow-xl">
                <input name="search"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off"
                    class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" value={query} onChange={handleOnSearch} />
                <div class="p-4">
                </div>
            </div>
        </div>
    );
}

export default SearchBar;