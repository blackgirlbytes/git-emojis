import React, { useState } from 'react';
import Fuse from 'fuse.js';

const SearchBar = ({ apiData }) => {
    const [query, setQuery] = useState('')
    const options = {
        keys: [
            "emoji_name",
        ],
        includeScore: true
    };
    const fuse = new Fuse(apiData, options);
    const results = fuse.search(query)
    const emojiResult = results.map(result => result.item)
    console.log(emojiResult)
    function handleOnSearch({ currentTarget = {} }) {
        const { value } = currentTarget;
        setQuery(value);

    }
    return (
        <div class="p-8" >
            <div class="bg-white flex items-center rounded-full shadow-xl">
                <input name="search"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off"
                    class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" value={query} onChange={handleOnSearch} />
                <div class="p-4">
                </div>

            </div>
            {/* turn this into a dropdown menu */}
            <div>Results for {query}:</div>
            <ol>
                {emojiResult.slice(0, 6).map(emoji => (
                    <li>
                        <img src={emoji.emoji_url} />
                    </li>
                ))}
            </ol>
        </div>

    );
}

export default SearchBar;