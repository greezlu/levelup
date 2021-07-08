let xhr = new XMLHttpRequest();

function getAllPosts () {

    xhr.open('GET', '/api/get');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            let response = xhr.responseText;
            console.log(response);
            let posts = JSON.parse(response);
            console.log(posts);
        }
    };

}

function showAllPosts() {
    console.log(getAllPosts());
}

document.addEventListener("DOMContentLoaded", init);
function init () {

    let isUserLogined = getUserStatus();

    if (isUserLogined) {
        showAllPosts();
    } else {
        console.log("Please login");
    }

}

function getUserStatus () {

    xhr.open('POST', '/api/status');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            showAllPosts();
        } else {
            console.log("User is not logined");
        }
    };
}

function loginUser (loginName) {
    xhr.open('POST', '/api/login');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + loginName);
    xhr.onload = function() {
        if (xhr.status == 202) {
            let response = xhr.responseText;
            console.log(response);
        }
    };
}

