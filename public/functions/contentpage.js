$(document).on("click", ".inside-div", function () {
    const postId = parseInt($(this).data("id"));

    // Retrieve all post data from localStorage
    const objdata = localStorage.getItem("boxobjData");
    const boxobj = objdata ? JSON.parse(objdata) : [];

    // Find the specific post that was clicked
    const clickedpost = boxobj.find(post => post.id === postId);

    if (clickedpost) {
        // Save the content of the clicked post to localStorage under a new key
        localStorage.setItem("currentPostContent", clickedpost.content);
        localStorage.setItem("currentPostheading", clickedpost.title);

        // Now, redirect to the new page
        window.location.href = "/text-content";
    }
});