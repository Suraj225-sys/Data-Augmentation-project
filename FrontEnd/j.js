// Get the "Upload CSV File" and "Upload Image File" input elements
const uploadCsvInput = document.getElementById('upload-csv');
const uploadImageInput = document.getElementById('upload-image');

// Prevent default behavior when clicking on "Upload CSV File" and "Upload Image File" inputs
uploadCsvInput.addEventListener('click', function(event) {
    event.preventDefault();
});

uploadImageInput.addEventListener('click', function(event) {
    event.preventDefault();
});
function handleCSVUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const folderPath = "C:\Yashas\Final Year Project"; // Change this to your desired folder path
        const filePath = folderPath + '/' + file.name;

        // Create a new anchor element
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(file);
        anchor.download = file.name;

        // Append the anchor to the body and trigger a click event
        document.body.appendChild(anchor);
        anchor.click();

        // Remove the anchor from the body
        setTimeout(() => {
            document.body.removeChild(anchor);
            URL.revokeObjectURL(anchor.href);
        }, 100);
    } 
    /*alert("HI")
    var blob = new Blob(["This is a sample file content."], {
        type: "text/plain;charset=utf-8",
     });
     saveAs(blob, "download.txt");*/
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const folderPath = "C:\Yashas\Final Year Project"; // Change this to your desired folder path
        const filePath = folderPath + '/' + file.name;

        // Create a new anchor element
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(file);
        anchor.download = file.name;

        // Append the anchor to the body and trigger a click event
        document.body.appendChild(anchor);
        anchor.click();

        // Remove the anchor from the body
        setTimeout(() => {
            document.body.removeChild(anchor);
            URL.revokeObjectURL(anchor.href);
        }, 100);
    }
}



function bodyloaded(){

    // Get the background video element
    var backgroundVideo = document.getElementById("background-video");

    // Set a delay before playing the video (in milliseconds)
    var delay = 2500; // 5000 milliseconds = 5 seconds

    // Function to start playing the video after the delay
    function playVideo() {
        // Play the video
        backgroundVideo.play();
    }

    // Start playing the video after the delay
    setTimeout(playVideo, delay);
}
