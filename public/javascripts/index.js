const fileInputEl = document.getElementById("fileInput");
const uploadBtnEl = document.getElementById("uploadBtn")
// Code taken from link below. Can't figure out why mine isn't working like the example.
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
function previewFile() {
    const preview = document.querySelector('img');
    console.log(preview)
    const file = document.querySelector('input[type=file]').files[0];
    // console.log(file)
    const reader = new FileReader();
  console.log(reader.result)
  // another load event example https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event
    reader.addEventListener("load", function () {
      console.log("load occurred")
        // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
      console.log(reader.readAsDataURL(file))
    }
  }
previewFile()

function uploadFile(){
    uploadBtnEl.addEventListener("click", async function(){
        // information on file reader https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        const fileReader = new FileReader();
        // Information on file object https://developer.mozilla.org/en-US/docs/Web/API/File
        // How to get file object from an input https://developer.mozilla.org/en-US/docs/Web/API/FileList
        const fileObject = fileInputEl.files[0];
        try{
            // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
            const imageString = await fileReader.readAsDataURL(fileObject)
            console.log(imageString)
        }
        catch(err){
            console.log("error occurred during image conversion", err)
        }
        // axios.post('/upload/file', formData)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // console.log("uploaded file: ", data.user)
    })

}
// uploadFile()
