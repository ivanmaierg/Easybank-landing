const $menuBtn = document.querySelector(".header__menu");
const $menuModal = document.querySelector(".menu__modal");
let isMenuOpen = false;
$menuBtn.addEventListener("click", () => {
    if (!isMenuOpen) {
        $menuBtn.classList.add("open");
        $menuModal.classList.add("open");
    } else {
        $menuBtn.classList.remove("open");
        $menuModal.classList.remove("open");
    }

    isMenuOpen = !isMenuOpen;
});
