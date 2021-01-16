function handleDeleteIconClick() {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var modal = document.getElementById("delete-post-modal");
    modal.style.display = "block";
}

function handleYesDeletePost() {
    var postList = document.getElementById('posts-list');
    console.log(postList);
}

function handleNoDeletePost() {
    var modal = document.getElementById("delete-post-modal");
    modal.style.display = "none";
}