/**
 * Класс, представляющий книгу.
 */
class Book {
    /**
     * Создает экземпляр книги.
     * 
     * @param {string} title - Название книги (непустая строка).
     * @param {number} pubYear - Год публикации (положительное целое число).
     * @param {number} price - Цена книги (положительное число).
     * @throws {Error} Если переданные аргументы не валидны.
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    get title() {
        return this._title;
    }

    /**
     * Устанавливает название книги.
     * 
     * @param {string} text - Название книги (без пробелов по краям).
     * @throws {Error} Если значение не является строкой или строка пустая.
     */
    set title(text) {
        if (typeof text !== 'string' || text.trim() === '') {
            throw new Error('Title must be a non-empty string.');
        }
        this._title = text.trim();
    }

    get pubYear() {
        return this._pubYear;
    }

    /**
     * Устанавливает год публикации.
     * 
     * @param {number} newPubYear - Год публикации.
     * @throws {Error} Если значение не является положительным целым числом.
     */
    set pubYear(newPubYear) {
        if (typeof newPubYear !== 'number' || newPubYear <= 0 || !Number.isInteger(newPubYear)) {
            throw new Error('pubYear must be a positive integer.');
        }
        this._pubYear = newPubYear;
    }

    get price() {
        return this._price;
    }

    /**
     * Устанавливает цену книги.
     * 
     * @param {number} newPrice - Цена книги.
     * @throws {Error} Если значение не является положительным числом.
     */
    set price(newPrice) {
        if (typeof newPrice !== 'number' || newPrice <= 0) {
            throw new Error('Price must be a positive number.');
        }
        this._price = newPrice;
    }

    /**
     * Выводит информацию о книге в консоль.
     */
    show() {
        console.log(`Название: ${this._title}\nГод публикации: ${this._pubYear}\nЦена: ${this._price}`);
    }

    /**
     * Статический метод для сравнения двух книг по году их издания.
     * Используется для сортировки массива книг.
     ** @param {Book} book1 - Первая книга для сравнения.
     * @param {Book} book2 - Вторая книга для сравнения.
     */
    static compare(book1, book2) {
        return book1.pubYear - book2.pubYear;
    }
}

try {
    const book1 = new Book('1984', 1949, 1000);
    book1.show();
    book1.price = 1900;
    book1.show();

    console.log("Цена book1:", book1.price);

    const book2 = new Book('Война и мир', 1867, 890);
    book2.show();
    const book3 = new Book('Игрок', 1896, 750);
    book3.show();

    const books = [book1, book2, book3];
    books.sort(Book.compare);
    console.log("Книги после сортировки по году издания:");
    for (let i = 0; i < books.length; ++i) {
        books[i].show();
    }

    try {
        book1.title = '';
        book1.show();
    } catch (err) {
        console.error('Ошибка в названии:', err.message);
    }

    try {
        book1.price= -1900;
        book1.show();
    } catch (err) {
        console.error('Ошибка: отрицательная цена', err.message);
    }

    try {
        book1.pubYear= -1949;
        book1.show();
    } catch (err) {
        console.error('Ошибка: отрицательный год:', err.message);
    }

} catch (err) {
    console.error('Ошибка в основном блоке:', err.message);
}

/**
 * Проверяет, является ли объект пустым (не содержит собственных строковых и символьных свойств).
 * 
 * @param {Object} obj - Проверяемый объект.
 */
function isEmpty(obj) {
    if (typeof obj !== 'object' || obj === null) return true;

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return Object.getOwnPropertySymbols(obj).length === 0;
}

const obj1 = { [Symbol()]: true };
const obj2 = {};
const obj3 = Object.defineProperty({}, 'name', { value: 'John', enumerable: true });

console.log('obj1 isEmpty?', isEmpty(obj1)); 
console.log('obj2 isEmpty?', isEmpty(obj2)); 
console.log('obj3 isEmpty?', isEmpty(obj3));
try {

/**
 * Проверяет, является ли переданное значение пустым.
 * 
 * Пустым считается: null/undefined, пустая строка (или строка из пробелов), 
 * пустой массив, пустой объект. Объекты Date всегда считаются непустыми.
 *
 * @param {*} obj - Значение любого типа для проверки.
 * @returns {boolean} True, если значение пустое, иначе false.
 */
  function isEmpty(obj) {
    if (obj == null) return true;              
    if (typeof obj === 'string') return obj.trim() === '';
    if (Array.isArray(obj)) return obj.length === 0;
    if (obj instanceof Date) return false;
    if (typeof obj === 'object') return Object.keys(obj).length === 0;
    return false;
  }

  const obj1 = {};
  const obj2 = { a: 1 };
  const obj3 = [];

  console.log("Объект 1", isEmpty(obj1)); // true
  console.log("Объект 2", isEmpty(obj2)); // false
  console.log("Объект 3", isEmpty(obj3)); // true

  let classObject = {
    className: "open menu",

    addClass(cls) {
      if (!cls || typeof cls !== 'string') return this;
      const classes = new Set(this.className.split(/\s+/).filter(Boolean));
      classes.add(cls);
      this.className = Array.from(classes).join(' ');
      return this;
    },

    removeClass(cls) {
      if (!cls || typeof cls !== 'string') return this;
      const classes = this.className.split(/\s+/).filter(Boolean).filter(c => c !== cls);
      this.className = classes.join(' ');
      return this;
    }
  };

  classObject.addClass('close');
  console.log("className после addClass('close'):", classObject.className);

  classObject.addClass('open');
  console.log("className после addClass('open'):", classObject.className);

  classObject.removeClass('menu');
  console.log("className после removeClass('menu'):", classObject.className);

  let jsonString = JSON.stringify(classObject, null, 2);
  console.log("JSON строка:", jsonString);

  let object2 = JSON.parse(jsonString);
  console.log('Сравнение JSON строк:', JSON.stringify(object2) === JSON.stringify(classObject)); // true

  /**
 * Класс для удобного управления CSS-классами в виде строки.
 */
  class ClassManager {

    /**
     * Создает экземпляр менеджера классов.
     * @param {string} [className=''] - Начальная строка с CSS-классами.
     */
    constructor(className = '') { this.className = className; }

    /**
     * Добавляет новый класс к списку, если он еще не добавлен.
     * Поддерживает цепочку вызовов (chaining).
     * 
     * @param {string} cls - Имя добавляемого CSS-класса.
     * @returns {this} Текущий экземпляр ClassManager для цепочки вызовов.
     */
    addClass(cls) {
      if (!cls) return this;
      const classes = new Set(this.className.split(/\s+/).filter(Boolean));
      classes.add(cls);
      this.className = Array.from(classes).join(' ');
      return this;
    }

    /**
     * Удаляет указанный класс из списка.
     * Поддерживает цепочку вызовов (chaining).
     * 
     * @param {string} cls - Имя удаляемого CSS-класса.
     * @returns {this} Текущий экземпляр ClassManager для цепочки вызовов.
     */
    removeClass(cls) {
      if (!cls) return this;
      this.className = this.className.split(/\s+/).filter(Boolean).filter(c => c !== cls).join(' ');
      return this;
    }
  }

  /**
 * Вычисляет количество секунд, прошедших с начала текущего дня.
 * 
 * @returns {number} Количество секунд от 00:00:00 до текущего момента времени.
 */
  function getSecondsToday() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - start) / 1000);
  }
  console.log("Секунд с начала дня: ", getSecondsToday());

  /**
 * Преобразует объект даты в строку локального формата.
 *
 * @param {Date} date - Объект даты для форматирования.
 * @returns {string} Строковое представление даты по правилам текущей локали.
 */
  function formatDate(date) {
    return date.toLocaleDateString();
  }

  let date1 = new Date(2026, 5, 9);   
  let date2 = new Date(2000, 11, 1); 
  let date3 = new Date(1995, 9, 10);

  console.log("Дата 1:", formatDate(date1));
  console.log("Дата 2:", formatDate(date2));
  console.log("Дата 3:", formatDate(date3));
} catch (error) {
  console.error("Произошла ошибка:", error.message);
}