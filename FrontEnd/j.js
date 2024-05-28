const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function handleImageUpload(event) {
    const file = document.getElementById("image-file").files[0];
    const email = document.getElementById("image-email-input").value;

    if (!file && !email) {
        alert("Select image and enter email id");
    } else if (!email) {
        alert("Enter Email-Id");
    } else if (!file) {
        const valid = email.match(validRegex);
        if (!valid) {
            alert("Enter valid Email-Id and Select Image File");
        } else {
            alert("Select Image File");
        }
    } else {
        const valid = email.match(validRegex);
        if (!valid) {
            alert("Enter valid Email-Id");
        } else {
            uploadFile(false, file, email);
        }
    }
}

function handleCsvUpload() {
    const file = document.getElementById("csv-file").files[0];
    const email = document.getElementById("csv-email-input").value;

    if (!file && !email) {
        alert("Select CSV and enter email id");
    } else if (!email) {
        alert("Enter Email-Id");
    } else if (!file) {
        const valid = email.match(validRegex);
        if (!valid) {
            alert("Enter valid Email-Id and Select CSV File");
        } else {
            alert("Select CSV File");
        }
    } else {
        const valid = email.match(validRegex);
        if (!valid) {
            alert("Enter valid Email-Id");
        } else {
            uploadFile(true, file, email);
        }
    }
}

function uploadFile(isCsvFile, file, email) {
    const s3 = new window.AWS.S3({
        accessKeyId: 'AKIAXDOGX2RFZORT5XLH',
        secretAccessKey: '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'
    });

    // Upload file to S3
    const params = {
        Bucket: isCsvFile ? 'dataaugmentations3bucket' : "dataaugmentations3imageupload",
        Key: file.name,
        Body: file
    };
    s3.upload(params, function (err, data) {
        if (err) {
            console.error("Error uploading file to S3:", err);
        } else {
            uploadEmail(email, isCsvFile);
            const modal = isCsvFile ? document.getElementById('success-csv-modal') : document.getElementById('success-image-modal');
            modal.style.display = 'block';

            // Close the modal when the close button is clicked
            const closeBtn = isCsvFile ? document.getElementsByClassName('close')[0] : document.getElementsByClassName('close')[1];
            closeBtn.onclick = function () {
                modal.style.display = 'none';
            };
        }
    });
}

function uploadEmail(email, isCsvFile) {
    const s3 = new window.AWS.S3({
        accessKeyId: 'AKIAXDOGX2RFZORT5XLH',
        secretAccessKey: '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'
    });

    const emailFileName = `email_${Date.now()}.txt`;
    const params = {
        Bucket: 'useremail-input',
        Key: emailFileName,
        Body: new Blob([email], { type: 'text/plain' })
    };

    s3.upload(params, function (err, data) {
        if (err) {
            console.error("Error uploading email to S3:", err);
        } else {
            console.log("Email uploaded successfully to S3:", data.Location);
        }
    });
}

function bodyloaded() {
    // Get the background video element
    var backgroundVideo = document.getElementById("background-video");
    var backgroundVideoTextBox = document.getElementById("background-video-text-box");
    var backgroundVideoCsvBox = document.getElementById("background-video-csv");

    // Set a delay before playing the video (in milliseconds)
    var delay = 2950; // 5000 milliseconds = 5 seconds

    // Function to start playing the video after the delay
    function playVideo() {
        // Play the video
        backgroundVideo.play();
        backgroundVideoTextBox.play();
        backgroundVideoCsvBox.play();
    }

    // Start playing the video after the delay
    setTimeout(playVideo, delay);
}
