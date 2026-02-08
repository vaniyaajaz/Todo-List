password = window.prompt("Password?")

if (username === 'invisiblestring') {
    const ul = document.getElementById("list");
    const addbutton = document.getElementById("add");
    const removebutton = document.getElementById("remove");
    const restorebutton = document.getElementById("restore");

    let removedItems = [];

    function addItem() {
        const input = document.getElementById("input");
        const text = input.value.trim();
        if (text === "") return;

        const li = document.createElement("li");
        li.className = "mycheck";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "custom-checkbox";

        const label = document.createElement("label");
        label.textContent = text;

        li.appendChild(checkbox);
        li.appendChild(label);

        ul.appendChild(li);
        input.value = "";
    }

    addbutton.addEventListener("click", addItem);

    removebutton.addEventListener("click", () => {
        const items = ul.children;
        for (let i = items.length - 1; i >= 0; i--) {
            const checkbox = items[i].children[0];
            if (checkbox.checked) {
                removedItems.push(items[i]);
                ul.removeChild(items[i]);
            }
        }
    });

    restorebutton.addEventListener("click", () => {
        removedItems.forEach(item => ul.appendChild(item));
        removedItems = [];
    });
} else {
    window.alert("Go away! Impostor")
    window.location.href = "wrong.html";
}
