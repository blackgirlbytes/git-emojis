import fetch from 'node-fetch';
async function fetchEmojiData() {
    let response = await fetch('https://api.github.com/emojis');
    let data = await response.json();
    const formattedData = Object.entries(data).map((entry) => ( { [entry[0]]: entry[1] } ));

    console.log(formattedData);
    return formattedData
}

fetchEmojiData()