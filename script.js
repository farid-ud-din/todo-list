const inputBox = document.getElementById('text')
const listContainer = document.getElementById('listContainer')

function addTask() {
    if (inputBox.value === "") {
        alert("Please add atleast one task!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    storeTasks();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        storeTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeTasks();
    }
}, false);

function storeTasks() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTasks();