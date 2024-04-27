// Get the "Upload CSV File" and "Upload Image File" input elements

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



// Function to set the email address in the email input field
/*function setEmail(emails) {
    const emailInput = document.getElementById('email-input');
    emailInput.value = emails;
}

// Function to get the stored email addresses from local storage
function getStoredEmails() {
    return localStorage.getItem('emails');
}

// Function to save the email address to local storage
function saveEmail(email) {
    const storedEmails = getStoredEmails();
    let emails = storedEmails ? storedEmails.split(',') : [];
    emails.push(email);
    localStorage.setItem('emails', emails.join(','));
}

// Function to handle the submission of email
document.getElementById('submit-email-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    saveEmail(email);
    const storedEmails = getStoredEmails();
    setEmail(storedEmails);
    // Here you can perform any validation or further processing with the email
    console.log('Submitted email:', email);
    // Clear the input field after submission if needed
    // emailInput.value = ''; // You can uncomment this line if you want to clear the input field
}); 

// Function to set the email addresses when the page loads
window.onload = function() {
    const storedEmails = getStoredEmails();
    setEmail(storedEmails);
}; */

/*function handleFileUpload(event, isCsvFile) {
    const file = event.target.files[0];
    if (file) {
       // Create an S3 instance
        const s3 = new window.AWS.S3({
            accessKeyId: 'AKIAXDOGX2RFZORT5XLH',
            secretAccessKey: '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'
          });

        // Upload file to S3
        const params = {
            Bucket: isCsvFile ? 'dataaugmentations3bucket': "dataaugmentations3imageupload",	
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
}*/



function handleImageUpload(event){
    const file =  document.getElementById("image-file").files[0];
    const email = document.getElementById("image-email-input").value;
    
    if(!file && !email){
        alert("Select image and enter email id")
    } else if(!email){
        alert("Enter Email-Id")
    } else if(!file){
        const valid = email.match(validRegex);
        if(!valid){
            alert("Enter vaild Email-Id and Select Image File")
        } else{
            alert("Select Image File")
        }
        
    } else{
        const valid = email.match(validRegex);
        if(!valid){
            alert("Enter vaild Email-Id ")
        } else{
            uploadFile(false, file);
        }
    }
}

function handleCsvUpload(){
    const file =  document.getElementById("csv-file").files[0];
    const email = document.getElementById("csv-email-input").value;
    
    if(!file && !email){
        alert("Select CSV and enter email id")
    } else if(!email){
        alert("Enter Email-Id")
    } else if(!file){
        const valid = email.match(validRegex);
        if(!valid){
            alert("Enter vaild Email-Id and Select CSV File")
        } else{
            alert("Select CSV File")
        }
        
    } else{
        const valid = email.match(validRegex);
        if(!valid){
            alert("Enter vaild Email-Id ")
        } else{
            uploadFile(true, file);

        }
    }
    
}
function uploadFile(isCsvFile,file)
{
    const s3 = new window.AWS.S3({
        accessKeyId: 'AKIAXDOGX2RFZORT5XLH',
        secretAccessKey: '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'
      });

    // Upload file to S3
    const params = {
        Bucket: isCsvFile ? 'dataaugmentations3bucket': "dataaugmentations3imageupload",	
        Key:  file.name,
        Body: file
    };
    s3.upload(params, function(err, data) {
        if (err) {
            console.error("Error uploading image file to S3:", err);
        } else {
            const modal = isCsvFile ? document.getElementById('success-csv-modal') : document.getElementById('success-image-modal') ;
        modal.style.display = 'block';

        // Close the modal when the close button is clicked
        const closeBtn = isCsvFile ? document.getElementsByClassName('close')[0] : document.getElementsByClassName('close')[1];
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
        }
    });

}

function bodyloaded(){

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

