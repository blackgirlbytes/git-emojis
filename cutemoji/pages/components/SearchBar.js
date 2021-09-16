import React, { useState } from 'react';

const getEmoji = (userInput, apiData) => {
    // why is this running right away???? 
    console.log('stop printing before I click the button')
    console.log(apiData)
    console.log(userInput)
    // return an image with the user input from the api data so I could do something like data.octopus 
    //and return the image for that
}

const SearchBar = ({ apiData }) => {
    const [userInput, setUserInput] = useState('')
    // console.log(userInput)

    return (
        <div class="p-8" >
            <div class="bg-white flex items-center rounded-full shadow-xl">
                <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" onChange={event => setUserInput(event.target.value)} />
                <div class="p-4">
                    <button type="submit" class="bg-red-400 text-white rounded-full p-2 hover:bg-red-300 focus:outline-none w-12 h-12 flex items-center justify-center" onClick={getEmoji(userInput, apiData)}>
                        +
                    </button>
                </div>

            </div>
        </div>

    );
}

export default SearchBar;