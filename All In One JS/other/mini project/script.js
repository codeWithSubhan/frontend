const title = document.getElementById('title')
const singinBtn = document.getElementById('singinBtn')
const nameFiled = document.getElementById('nameFiled')
const singupBtn = document.getElementById('singupBtn')

singupBtn.onclick = function (e) {
    console.log("sign Up")
    title.innerHTML = "sing up";
    nameFiled.style.display = "block";
    e.preventDefault();
}
singinBtn.onclick = function () {
    title.innerHTML = "login";
    nameFiled.style.display = "none";
}