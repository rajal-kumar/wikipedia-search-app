const form = document.querySelector('.js-search-form');
const endpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=&srlimit=20&srsearch=SEARCH_QUERY_GOES_HERE';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    //Prevents the page form reloading when the form
    event.preventDefault();

    // Get the value of the input field
    const inputValue = document.querySelector('.js-search-input').value;

    // Remove whitespace from the input
    const searchQuery = inputValue.trim();

    // print 'searchQuery' to the console
    console.log(searchQuery);
}