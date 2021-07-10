class Discuss {

    constructor () {

        this.xhr = new XMLHttpRequest();

        this.loginWrapper = document.getElementById("login-form-wrapper");
        this.postsWrapper = document.getElementById("posts-list-wrapper");
        this.footerWrapper = document.getElementById("footer-form-wrapper");
        this.footerDisclaimer = document.getElementById("footer-disclaimer");

        this.logoutButton = document.getElementById("logout-button");
        this.logoutButton.addEventListener("click", this.logout.bind(this));

        this.loginForm = document.forms.login;
        this.loginForm.addEventListener("submit", this.login.bind(this));

        this.sendPostForm = document.forms["create-post"];
        this.sendPostForm.addEventListener("submit", this.sendPost.bind(this));

        this.getStatus();

    }

    showLoginForm () {

        this.postsWrapper.innerHTML = "";

        this.postsWrapper.style.display = "none";
        this.footerWrapper.style.display = "none";
        this.logoutButton.style.display = "none";

        this.loginWrapper.style.display = "block";
        this.footerDisclaimer.style.display = "block";

    }

    hideLoginForm () {

        this.logoutButton.style.display = "block";
        this.postsWrapper.style.display = "block";
        this.footerWrapper.style.display = "block";

        this.loginWrapper.style.display = "none";
        this.footerDisclaimer.style.display = "none";

    }

    getAllPosts () {
        this.sendRequest('/api/get', this.getAllPostsAction.bind(this), 'GET');
    }

    getAllPostsAction (status, response) {

        if (status == 200) {

            this.hideLoginForm();

            let posts = JSON.parse(response);

            this.postsWrapper.innerHTML = "";

            for (let i = posts.length; i--;) {
                this.addPost(posts[i]);
            }

        } else if (status == 401) {

            console.log("User is not defined on the server");
            this.showLoginForm();

        } else {

            console.log("Unkonown error while getting posts");
            this.showLoginForm();

        }

    }

    getStatus () {
        this.sendRequest("/api/status", this.getStatusAction.bind(this), "GET");
    }

    getStatusAction (status, response) {

        if (status == 200 && response)  {
            this.author = response;
            this.getAllPosts();
        } else if (status == 403) {
            this.author = undefined;
            this.showLoginForm();
            console.log("User is not defined on the server");
        } else {
            console.log("Unkonown error while getting user status");
        }

    }

    addPost (post) {

        let postDiv = document.createElement("div");
        postDiv.classList.add("post");
        this.postsWrapper.append(postDiv);

        let postAuthor = document.createElement("div");
        postAuthor.classList.add("post-author");
        postDiv.append(postAuthor);

        let postAuthorSpan = document.createElement("span");
        postAuthorSpan.innerText = post["author_name"];
        postAuthor.append(postAuthorSpan);

        let postBody = document.createElement("div");
        postBody.classList.add("post-body");
        postDiv.append(postBody);

        let postBodySpan = document.createElement("span");
        postBodySpan.innerText = post["body"];
        postBody.append(postBodySpan);

        let postDate = document.createElement("div");
        postDate.classList.add("post-date");
        postDiv.append(postDate);

        let postDateSpan = document.createElement("span");
        postDateSpan.innerText = post["creation_date"].slice(0, -3);
        postDate.append(postDateSpan);       

    }

    sendRequest (address, callback, type = "GET", formData = false) {

        this.xhr.open(type, address);

        if (formData) {
            this.xhr.send(formData);
        } else {
            this.xhr.send();
        }

        if (callback) {

            this.xhr.onload = function() {
                callback(this.status, this.responseText);
            };

        }

        this.xhr.onerror = function () {
            console.log("Error due to sending request" + address);
        }

    }

    sendPost (event) {

        event.preventDefault();

        if (!this.author) {
            console.log("User is not defined");
            return;
        }

        let formData = new FormData(event.target);
        formData.append("author_name", this.author);
        this.sendRequest("/api/create", this.sendPostAction.bind(this), "POST", formData);

    }

    sendPostAction (status) {

        if (status == 201)  {
            this.getAllPosts();
        } else if (status == 500) {
            console.log("Server error");
        } else {
            console.log("Unkonown error while sending post");
        }

    }

    login (event) {

        event.preventDefault();
        let formData = new FormData(event.target);
        this.sendRequest("/api/login", this.loginAction.bind(this), "POST", formData);

    }

    loginAction (status) {

        if (status == 202)  {
            this.author = this.loginForm.name.value;
            this.hideLoginForm();
            this.getAllPosts();
        } else if (status == 404) {
            console.log("Incorrect user name");
        } else {
            console.log("Unkonown error while ligging in");
        }

    }

    logout () {
        this.sendRequest("/api/logout", this.logoutAction.bind(this), "DELETE");
    }

    logoutAction (status) {

        if (status == 200)  {
            this.author = undefined;
            this.showLoginForm();
        } else if (status == 400) {
            console.log("User was not logged in");
        } else {
            console.log("Unkonown error while logout");
        }

    }

}

let discussManagment = null;

document.addEventListener("DOMContentLoaded", ()=>{
    discussManagment = new Discuss ();
});
