function openNav() {
    document.getElementById("header__menu").style.width = "110vw";

}
function closeNav(){
  document.getElementById("header__menu").style.width = "0";
}

document.getElementById("closeMenu").addEventListener("click", closeNav);
document.getElementById("openNav").addEventListener("click", openNav);
