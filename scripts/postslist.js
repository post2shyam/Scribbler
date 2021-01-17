var postList = [{
        "author": "Srishti Gupta",
        "title": "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
        "body": "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
    },
    {
        "author": "Colby Fayock",
        "title": "What is linting and how can it save you time?",
        "body": "One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."

    },
    {
        "author": "Yazeed Bzadough",
        "title": "How to Get More Views on Your Tech Blog",
        "body": "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
    },
    {
        "author": "Cedd Burge",
        "title": "How to write easily describable code",
        "body": "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
    },
    {
        "author": "Srishti Gupta",
        "title": "Everything you should know about ‘module’ & ‘require’ in Node.js",
        "body": "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
    }
]

//main - code
var currSelectedPost = 0;

showPosts();


//Helper - functions
function showPosts() {
    postList.forEach(function(post, index) {
        document.getElementById('posts').innerHTML +=
            createPostCardUi(index, post.author, post.title, post.body);
    });
}

function createPostCardUi(index, author, title, body) {

    var postId = 'postid_' + index;

    return ' <div id=' + postId + ' class="card-flex">' +
        '  <div>' +
        '<p class="post-author">' + author + '</p>' +
        ' </div>' +

        '<div class="card-content">' +
        '<div class="post-title">' +
        '<i onclick="handleDeleteIconClick(' + postId + ')" class="delete-icon fa fa-trash"></i>' +
        '<p>' + title + '</p>' +
        '</div>' +
        '<p class="post-content">' + body + '</p>' +
        '<span>' +
        '<i onclick="handleEditPostClick(' + postId + ')" class="delete-icon fa fa-ellipsis-h"></i>' +
        '</span>' +
        '</div>' +
        '</div>';
}

// Event - Handlers
function handleEditPostClick(postId) {
    //Store the current selected post
    var mySplits = postId.id.split("_");
    currSelectedPost = mySplits[1];
    var postIndex = Number.parseInt(currSelectedPost);

    //Store the current selected post to session store
    sessionStorage.setItem("currentpost", JSON.stringify(postList[postIndex]));

    //Navigate to edit post screen.
    window.location.href = '../html/post.html';
}

function handleDeleteIconClick(postId) {
    //Store the current selected post
    var mySplits = postId.id.split("_");
    currSelectedPost = mySplits[1];

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
    //Remove the entry from the posts
    postList.splice(currSelectedPost, 1);

    //Clear the canwas
    document.getElementById('posts').innerHTML = "";

    //Dismiss the delete post confirmation modal dialog
    hideDeletePostDialog();

    //Redraw the page
    showPosts();
}

function handleNoDeletePost() {
    hideDeletePostDialog();
}

function hideDeletePostDialog() {
    var modal = document.getElementById("delete-post-modal");
    modal.style.display = "none";
}