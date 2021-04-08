const form = document.querySelector('.js-search-form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    //Prevents the page form reloading when the form
    event.preventDefault();

    // Get the value of the input field
    const inputValue = document.querySelector('.js-search-input').value;

    // Remove whitespace from the input
    const searchQuery = inputValue.trim();

    // print 'searchQuery' to the console
    console.log(searchQuery);

    try {
        const results = await searchWikipedia(searchQuery);
        console.log(results);
    } catch (err) {
        console.log(err);
        alert('Failed to search Wikipedia request')        
    }
}

async function searchWikipedia(searchQuery) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    const response = await fetch(endpoint);

    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

function displayResults() {
    const searchResults = document.querySelector('.js-search-results');
}