 const uploadHelpEl = document.getElementById("uploadHelp")
 
 function previewFile() {
    console.log("preview file triggered")
    const preview = document.querySelector('img');

    const file = document.querySelector('input[type=file]').files[0];

    const reader = new FileReader();

    // another load event example https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event
    reader.addEventListener("load", async function () {
        console.log("load function");
        // Updates the img tag with the base64 string that was created
        preview.src = reader.result;
        const imgString = reader.result;
        try{
            const response = await axios.post('/api/Images', {image_string: imgString})
            console.log("image string posted", response);
            uploadHelpEl.innerText = "Success!"
        } 
        catch(error) {
            const fileTooLarger = error.message.indexOf("413")
            console.log(error, fileTooLarger)
            if(fileTooLarger >=0){
                uploadHelpEl.innerText = `Error occurred uploading, the image is too large`;
            }else{
                uploadHelpEl.innerText = `Error occurred uploading the image: ${error}`
            }
        }
    }, false);

    if (file) {
        // This triggers the load in the event listener for the reader. 
        // This is older code that existed before promises. This handles the async nature of reader.
        // This allows reader to complete reading the file into a url (base64) before the code updates the img with base64 string.
        reader.readAsDataURL(file);
    }
}