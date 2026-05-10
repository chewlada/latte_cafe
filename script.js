// Меняем меню по клику
const food_btn = document.getElementById('food-btn');
const drinks_btn = document.getElementById('drinks-btn');
const menu = document.getElementById('actual-menu');

drinks_btn.addEventListener('click', function() {
    menu.src = 'drinks-menu.html';
    menu.height = '1170px';
});

food_btn.addEventListener('click', function() {
    menu.src = 'food-menu.html';
    menu.height = '1100px';
});

// Причесать в норм функцию, добавить смену стилей по клику на btn. Отдельно сделать возможность при клике на frame открывать меню на весь экран и добавить возможность скачать картинкой.
