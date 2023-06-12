function openNav() {
    document.getElementById("header__menu").style.width = "100vw";

}
function closeNav(){
  document.getElementById("header__menu").style.width = "0";
}

document.getElementById("closeMenu").addEventListener("click", closeNav);
document.getElementById("openNav").addEventListener("click", openNav);
