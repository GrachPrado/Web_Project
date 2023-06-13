document.addEventListener('DOMContentLoaded', () => {

  function openNav() {
    document.getElementById("header__menu").style.width = "100vw";

}
function closeNav(){
  document.getElementById("header__menu").style.width = "0";
}

  const close = document.getElementById("closeMenu");
  console.log(close);
close.addEventListener("click", closeNav);
const open = document.getElementById("openNav");
console.log(open);
open.addEventListener("click", openNav);
});
