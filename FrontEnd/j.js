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


function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
       // Create an S3 instance
        const s3 = new window.AWS.S3({
            accessKeyId: 'AKIAXDOGX2RFZORT5XLH',
            secretAccessKey: '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'
          });

        // Upload file to S3
        const params = {
            Bucket: 'dataaugmentations3bucket',
            Key:  file.name,
            Body: file
        };
        s3.upload(params, function(err, data) {
            if (err) {
                console.error("Error uploading image file to S3:", err);
            } else {
                console.log("Image file uploaded successfully to S3:", data.Location);
            }
        });
    }
}


function bodyloaded(){

    // Get the background video element
    var backgroundVideo = document.getElementById("background-video");

    // Set a delay before playing the video (in milliseconds)
    var delay = 2950; // 5000 milliseconds = 5 seconds

    // Function to start playing the video after the delay
    function playVideo() {
        // Play the video
        backgroundVideo.play();
    }

    // Start playing the video after the delay
    setTimeout(playVideo, delay);
}
