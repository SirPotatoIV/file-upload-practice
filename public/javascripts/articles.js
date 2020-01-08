 function previewFile() {
    const preview = document.querySelector('img');

    const file = document.querySelector('input[type=file]').files[0];

    const reader = new FileReader();

    // another load event example https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event
    reader.addEventListener("load", function () {
        // Updates the img tag with the base64 string that was created
        preview.src = reader.result;
    }, false);

    if (file) {
        // This triggers the load in the event listener for the reader. 
        // This is older code that existed before promises. This handles the async nature of reader.
        // This allows reader to complete reading the file into a url (base64) before the code updates the img with base64 string.
        reader.readAsDataURL(file);
    }
}