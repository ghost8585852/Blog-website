const boxobj = [];

$(document).ready(function () {
    // Load saved content from localStorage on page load
    const objdata = localStorage.getItem("boxobjData");
    if (objdata) {
        const parsedobjdata = JSON.parse(objdata);
        parsedobjdata.forEach(item => boxobj.push(item));
        renderPosts();
    }

    // Function to render posts dynamically
    function renderPosts() {
        $(".content-section").empty(); // clear existing content
        boxobj.forEach(post => {
            const html = `<div class="inside-div" data-id="${post.id}">
                  <h1 class="1">${post.title}</h1>
                  <p class="2">${post.summary}</p>
                  <img class="4" src="/images/${post.image}" alt="uploaded-image">
              </div>`;
            $(".content-section").append(html);
        });
    }

    // Function to add a new post
    function addContentToArray() {
        const input1 = $(".title").val();
        const input2 = $(".summary").val();
        const input3 = $(".content").val();
        const input4 = $(".image-selector").val().split("\\").pop();

        const post = {
            id: boxobj.length + 1,
            title: input1,
            summary: input2,
            content: input3,
            image: input4,
        };

        boxobj.push(post);
        localStorage.setItem("boxobjData", JSON.stringify(boxobj));
        renderPosts();
    }

    // Submit button click
    $(".submit-button-for-form").on("click", function () {
        addContentToArray();
    });
});
