const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll(".input-box")

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create p tag of class "input-box" and "contenteditable" attribute or img elemnet
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// Delete notes
notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    } 
    else if (e.target.tagName === "P") {
       let notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

