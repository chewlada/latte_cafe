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


class CustomDropdown {
    // для закрытия открытого селекта при клике вне его
    static hideOpenSelect() { }
    // конструктор
    constructor(target, params) { }
    // обработчик события click
    _onClick(e) { }
    // обновляет значения атрибутов в зависимости от выбранной опции, генерирует событие 'itc.elect.change'
    _updateOption(el) { }
    // сбрасывает состояние, генерирует событие 'itc.select.change'
    _reset() { }
    // при изменении выбранной опции
    _changeValue(option) { }
    // включает отображение выпадающего списка
    show() { }
    // скрывает список с опциями
    hide() { }
    // переключает список с опциями
    toggle() { }
    // удаления слушателей события click селекта
    dispose() { }
    // геттер, который возвращает значение выбранной опции
    get value() { }
    // сеттер, который позволяет установить опцию по значению
    set value(value) { }
    // геттер, который возвращает индекс выбранной опции
    get selectedIndex() { }
    // сеттер, который позволяет выбрать опцию по её индексу
    set selectedIndex(index) { }
}

ItcCustomSelect.hideOpenSelect();