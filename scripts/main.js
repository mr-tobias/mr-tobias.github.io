// This file contains JavaScript code to handle the APK download button functionality and the image upload process.

document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-apk');
    const imageUploadInput = document.getElementById('app-image-upload');

    downloadButton.addEventListener('click', function() {
        window.location.href = 'assets/apk/app-release.apk';
    });

    imageUploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgPreview = document.createElement('img');
                imgPreview.src = e.target.result;
                imgPreview.alt = 'Uploaded App Image';
                imgPreview.style.maxWidth = '300px';
                imgPreview.style.marginTop = '10px';
                document.body.appendChild(imgPreview);
            };
            reader.readAsDataURL(file);
        }
    });
});