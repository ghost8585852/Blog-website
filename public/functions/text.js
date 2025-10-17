// This script should be run on the /text-content page
$(document).ready(function () {
    // Get the content from localStorage
    const contentToDisplay = localStorage.getItem("currentPostContent",);
    const heading = localStorage.getItem("currentPostheading",);

    if (contentToDisplay) {
        // Now, display the content in the textarea-section
        $(".text-section-heading").html(heading);
        $(".textarea-section").html(contentToDisplay);
        
        // Optionally, clear the localStorage item after use
        // localStorage.removeItem("currentPostContent"); 
    }
});