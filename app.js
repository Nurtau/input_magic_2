const input = document.querySelector("input");
const container = document.querySelector(".container");


window.addEventListener("load", (event) => {
    if (localStorage.getItem("word") === null) {
        localStorage.setItem("word", "");
    } else {
        input.value = localStorage.getItem("word");
        change(event);
    }
})


input.addEventListener("input", change);

function change(event) {
    let value = input.value;
    newValue = ""
    //deleting all elements
    while(container.firstChild) {
        newValue += container.firstChild.innerText;
        container.removeChild(container.firstChild);
    }
    if (event.type === "click") {
        value = newValue;
        input.value = value;
    }
    localStorage.setItem("word", value);
    if (value !== "") {
        for (let char of value) { //recreating all elements
            const newItem = document.createElement("p");
            newItem.innerText = char;
            newItem.classList.add("item");
            newItem.addEventListener("click", (event) => {
                container.removeChild(event.target);
                change(event);
            })
            container.appendChild(newItem);
        }
    } else {
        input.placeholder = "Here we go again";
    }
}