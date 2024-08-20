const menuButton = document.querySelector("#open-menu-button")
const mainMenu = document.querySelector(".main-menu")
const exitMenu = document.querySelector("#exit")


menuButton.onclick = (e) => {
    mainMenu.classList.toggle('hidden');
}

exitMenu.onclick = () => {
    mainMenu.classList.toggle('hidden');
}