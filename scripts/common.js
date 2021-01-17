function embedHeader() {
    var headerHtml = `<div class="header">
    <div>
        <p class="appname">ScriBBler</p>
        <h2 class="tagline">Explore, Imagine, Create</h2>
    </div>

    <div class="header-button-parent">
        <button class="blue-btn" onclick="handleSignUpButtonClick()">Sign Up</button>
        <button class="blue-btn" onclick="handleSignInButtonClick()">Sign In</button>
    </div>
</div>`;

    var currentpage = document.getElementsByTagName('body')[0].innerHTML;
    document.getElementsByTagName('body')[0].innerHTML = headerHtml + signUpModal() + signInModal() + currentpage;
}


function signUpModal() {
    return `<div id="signUpModal" class="modal">
    <!-- Modal content -->
    <div class="signup-modal-content">
        <div class="modal-title">
            <h2 class="instruction-text">Get Started</h2>
            <span id="signUpClose" class="close">&times;</span>
        </div>
        <hr/>
        <form class="input-form">
            <label for="name" class="label-text">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required>

            <label for="username" class="label-text">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required>

            <label for="password" class="label-text">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <label for="confirmpassword" class="label-text">Confirm Password</label>
            <input type="password" id="confirmpassword" placeholder="Re-enter your password" required>

            <button class='green-button'>Sign Up</button>

        </form>
    </div>
</div>`;
}


function signInModal() {
    return `<div id="signInModal" class="modal">

    <!-- Modal content -->
    <div class="signin-modal-content">
        <div class="modal-title">
            <h2 class="instruction-text">Welcome Back !</h2>
            <span id="signInClose" class="close">&times;</span>
        </div>
        <hr/>
        <form class="input-form">

            <label for="username" class="label-text">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required>

            <label for="password" class="label-text">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <button class='green-button'>Sign In</button>
        </form>

        <p class=bottom-banner>Not a member?
            <span onclick="handleSignUpUrlClick()" class=signup-url>Sign Up
            </span>
        </p>
    </div>

</div>`;
}

//Event - handlers
// When the user clicks on the signup button, open the modal
function handleSignUpButtonClick() {
    // Get the modal
    var modal = document.getElementById("signUpModal");

    // Get the <span> element that closes the modal
    var span = document.getElementById("signUpClose");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modal.style.display = "block";
};

function handleSignInButtonClick() {
    // Get the modal
    var modal = document.getElementById("signInModal");

    // Get the <span> element that closes the modal
    var span = document.getElementById("signInClose");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modal.style.display = "block";
};