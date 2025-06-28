//alert("my new project");
let my_user=null;
const red_item = document.getElementById("red_item");
const green_item = document.getElementById("green_item");
const yellow_item = document.getElementById("yellow_item");
const blue_item = document.getElementById("blue_item");

const user_input = document.getElementById("user_input");
const add_user = document.getElementById("add");
const delete_user = document.getElementById("delete");
const move_to_red = document.getElementById("move_red");
const move_to_green = document.getElementById("move_green");
const move_to_yellow = document.getElementById("move_yellow");
const move_to_blue = document.getElementById("move_blue");

function addUser() {

    if (my_user == null) {
        alert("Enter user input");
        my_user = document.createElement("div");
        my_user.classname = "my_user";
        my_user.setAttribute("id", "my_user");
        my_user.innerHTML = user_input.value;
        //console.log(my_user);
        red_item.append(my_user);
        user_input.disabled = true;
        add_user.disabled = true;
    }
}
function deleteUser() {
    if (my_user != null) {
        my_user.remove();
        user_input.disabled = false;
        add_user.disabled = false;
        delete_user.disabled = true;
        user_input.value = "";
        my_user = null;

    }

}
function movetoRed() {
    if (my_user != null) {
        red_item.append(my_user);

    }
}
function movetoGreen() {
    if (my_user != null) {
        green_item.append(my_user);
    }
}
function movetoYellow() {
    if (my_user != null) {
        yellow_item.append(my_user);
    }
}
function movetoBlue() {
    if (my_user != null) {
        blue_item.append(my_user);
    }
}

add_user.addEventListener("click", addUser);
delete_user.addEventListener("click", deleteUser);
move_to_red.addEventListener("click", movetoRed);
move_to_green.addEventListener("click", movetoGreen);
move_to_yellow.addEventListener("click", movetoYellow);
move_to_blue.addEventListener("click", movetoBlue);
