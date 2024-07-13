const menuActive = document.querySelector('.menu-active'); // Находим меню с классом menu-active
const burger = document.querySelector('.burger-active'); // Находим необходимую кнопку с классом burger-active
const menuClose = document.querySelector('.menu-close'); // Находим кнопку крестика с классом menu-close для закрытия меню

function toggleMenu() {
    menuActive.classList.toggle('hidden'); // Функция устанавливает или удаляет класс hidden для открытия и закрытия меню в div с классом menu-active который записан в переменную menuActive
}

burger.addEventListener('click', toggleMenu); // Срабатывание функции по клику на кнопку с классом burger-active
menuClose.addEventListener('click', toggleMenu); // Срабатывание функции по клику на кнопку с классом menu-close
