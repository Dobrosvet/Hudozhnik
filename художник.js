/*
MIT License

Copyright (c) 2017 Dobrosvet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Русификация JavaScript
// #1 (номер задачи на GitHub)
(function () {
  да  = true
  нет = false

  Объект                    = Object
  Объект.prototype.прототип = Object.prototype

  Массив                   = Array
  Массив.прототип.добавить = Array.push

  окно = window

  // окно.после_загрузки === window.onload
  Объект.defineProperty(window, 'после_загрузки', {
    get: function () {
      return this.onload
    },
    set: function (значение) {
      this.onload = значение
    }
  });

  // документ === document
  Объект.defineProperty(window, 'документ', {
    get: function () {
      return this.document
    },
    set: function (значение) {
      this.document = значение
    }
  });

  // Гипертекстовый_элнмент.добавить_потомка === document.body.appendChild
  Объект.defineProperty(HTMLElement.prototype, 'добавить_потомка', {
    get: function () {
      return this.appendChild
    },
    set: function (значение) {
      this.appendChild = значение
    }
  });

  // документ.создать_элемент === document.createElement
  Объект.defineProperty(HTMLDocument.prototype, 'создать_элемент', {
    get: function () {
      return this.createElement
    },
    set: function (значение) {
      this.createElement = значение
    }
  });

  // документ.тело === document.body
  Объект.defineProperty(HTMLDocument.prototype, 'тело', {
    get: function () {
      return this.body
    },
    set: function (значение) {
      this.body = значение
    }
  });

  // холст.ширина === HTMLCanvasElement.width
  Объект.defineProperty(HTMLCanvasElement.prototype, 'ширина', {
    get: function () {
      return this.width
    },
    set: function (значение) {
      this.width = значение
    }
  });

  // холст.высота === HTMLCanvasElement.height
  Объект.defineProperty(HTMLCanvasElement.prototype, 'высота', {
    get: function () {
      return this.height
    },
    set: function (значение) {
      this.height = значение
    }
  });

  // консоль === console
  консоль                  = console
  // консоль.вывести === console.log
  консоль.прототип.вывести = console.log
})()

// Конец Русификации JavaScript