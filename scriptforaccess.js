window.location.href = "index.html"
password = window.prompt("Password?")

if (password === 'invisiblestring') {
    window.location.href = "AccessPage.html"
} else {
    window.location.href = "wrong.html"
}
