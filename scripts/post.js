//main - program
var numOfLikes = 1;

//Event handlers
function handleEditButtonClick() {
    const saveButtonTemplate = 'Save <i style="font-size: 14px;" class="fa fa-save" id="edit-save-icon"></i>';
    const editButtonTemplate = 'Edit <i style="font-size: 14px;" class="fa fa-edit" id="edit-save-icon"></i>';
    const border = '2px solid pink';

    const postTitleField = document.getElementById("post-title");
    const postBodyField = document.getElementById("post-content");
    const editButton = document.getElementById("edit-button")

    editButton.innerHTML = postTitleField.contentEditable == "false" ? editButtonTemplate : saveButtonTemplate;
    postTitleField.style.border = postTitleField.contentEditable == "false" ? 'none' : border;
    postBodyField.style.border = postTitleField.contentEditable == "false" ? 'none' : border;
    postBodyField.contentEditable = postBodyField.contentEditable == "false" ? "true" : "false";
    postTitleField.contentEditable = postTitleField.contentEditable == "false" ? "true" : "false";

}

function handleLikeButtonClick() {
    const nonZeroLikeButtonTemplate = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked!';
    const likeButton = document.getElementById("like-button");
    const likeText = document.getElementById("like-text");

    //Update the like button contents.
    likeButton.innerHTML = nonZeroLikeButtonTemplate;

    switch (numOfLikes) {
        case 1:
            likeText.innerHTML = '1 person likes this!';
            break;
        default:
            likeText.innerHTML = numOfLikes + " people like this!";
            break;
    }
    numOfLikes++;
}

function handleCommentButtonClick() {
    //Get the text from comments text 
    const currentComment = document.getElementById('new-comment');

    if (currentComment.value !== '') {
        const commentTemplate = '<p class="comment-entry">' + currentComment.value + '</p>';

        //Append the comment in the UI
        const commentContainer = document.getElementById('comment-container');
        const existingComments = commentContainer.innerHTML;
        commentContainer.innerHTML = commentTemplate + existingComments;

        //Reset the new comments field
        currentComment.value = "";
    }
}