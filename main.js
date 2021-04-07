const form = document.querySelector('.js-search-form');

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