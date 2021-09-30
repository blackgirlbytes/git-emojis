import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Fuse from 'fuse.js';
import EmojiCards from './EmojiCards';

const SearchWithEmojiCards = ({ apiData }) => {
    const [query, setQuery] = useState('')

    const options = {
        keys: [
            "emoji_name",
        ],
        includeScore: true
    };
    const fuse = new Fuse(apiData, options);
    const results = fuse.search(query)
    const emojiResult = query ? results.map(result => result.item) : apiData;

    return (
        <div className="w-3/6">
            <SearchBar query={query} setQuery={setQuery} />
            <EmojiCards emojiResult={emojiResult} />
        </div>
    );
}

export default SearchWithEmojiCards;