const input = document.querySelector("input");
const container = document.querySelector(".container");


const init = () => {
    if (localStorage.getItem("word") === null) {
        localStorage.setItem("word", "");
    } else {
        input.value = localStorage.getItem("word");
        change(null);
    }
}
init();

input.addEventListener("input", change);

container.addEventListener("click", (event) => { //event delegation
    if (event.target.classList.contains("item")) {
        container.removeChild(event.target);
        change(event);
    }
}); 


function change(event) {
    let value = input.value;
    newValue = ""
    //deleting all elements
    
    if (event?.type === "click") {
        while(container.firstChild) {
            newValue += container.firstChild.innerText;
            container.removeChild(container.firstChild);
        }
        value = newValue;
        input.value = value;
    } else {
        container.innerHTML = "";
    }
    if (value !== "") {
        for (let char of value) { //recreating all elements
            const newItem = document.createElement("p");
            newItem.innerText = char;
            newItem.classList.add("item");
            container.appendChild(newItem);
        }
    } else {
        input.placeholder = "Here we go again";
    }
}

window.addEventListener("beforeunload", () => (localStorage.setItem("word", input.value)));