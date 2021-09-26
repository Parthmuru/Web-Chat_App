
function addUser(){
    user_name = document.getElementById("user").value;
    localStorage.setItem("user_name", user_name);
    window.location = "game_page.html";
}

