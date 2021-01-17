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