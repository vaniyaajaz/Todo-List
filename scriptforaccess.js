const pass_show = document.querySelector("#hid")
const textbox = document.getElementById("password")
const overwrite = document.getElementById("overcome")

pass_show.addEventListener("click", () => {
    if (textbox.type === "password") {
        textbox.type = "text"
        pass_show.id = "shown"
    } else {
        textbox.type = "password"
        pass_show.id = "hid"
    }
})

function checkpassword() {
    const password = textbox.value
    if (password === 'invisiblestring') {
        window.location.href = "AccessPage.html"
    } else {
        window.location.href = "wrong.html"
    }
}

overwrite.addEventListener("click", () => {
    window.location.href = "AccessPage.html"
})
