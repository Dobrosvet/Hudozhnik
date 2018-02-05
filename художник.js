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


Русификация_JavaScript()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Русификация JavaScript #1 (номер задачи на GitHub)

function Русификация_JavaScript() {
  /////
  // Ключевые слова
  да  = true
  нет = false
  // Конец Ключевые слова
  /////


  //////////////////////////////////////////////////////////
  // Стандарт EcmaScript
  декодировать_ссылку = decodeURI
  кодировать_ссылку   = encodeURI

  Объект                    = Object
  Объект.prototype.прототип = Object.prototype
  Объект.defineProperty( Объект, 'определить_свойство', {
    get: function () {
      return this.defineProperty
    },
    set: function ( значение ) {
      this.defineProperty = значение
    }
  } )
  Объект.defineProperty( Объект, 'определить_свойства', {
    get: function () {
      return this.defineProperties
    },
    set: function ( значение ) {
      this.defineProperties = значение
    }
  } )
  Объект.определить_свойства( Объект.прототип, {
    содержит_собственное_свойство: {
      get: function () {
        return this.hasOwnProperty
      },
      set: function ( значение ) {
        this.hasOwnProperty = значение
      }
    }
  } )


  Массив                            = Array
  Массив.прототип.добавить          = Array.prototype.push
  Массив.прототип.удалить_последний = Array.prototype.pop
  Объект.определить_свойства( Array.prototype, {
    длинна: {
      get: function () {
        return this.length
      },
      set: function ( значение ) {
        this.length = значение
      }
    }
  } )

  Функция                    = Function
  Функция.прототип.привязать = Function.prototype.bind

  в_объект = JSON.parse
  в_строку = JSON.stringify

  ПИ      = Math.PI
  тангенс = function ( угол_в_градусах ) {
    return Math.tan( градусы_в_радианы( угол_в_градусах ) )
  }

  Дата = Date
  Объект.определить_свойства( Дата.прототип, {
    получить_время: {
      get: function () {
        return this.getTime
      },
      set: function ( значение ) {
        this.getTime = значение
      }
    }
  } )

  Строка                          = String
  Строка.прототип.вырезать_строку = function ( от, до ) {
    return this.slice( от, до )
  }
  Объект.определить_свойства( String.прототип, {
    длинна: {
      get: function () {
        return this.length
      },
      set: function ( значение ) {
        this.length = значение
      }
    }
  } )

  Обещание = Promise
  Объект.определить_свойства( Обещание.prototype, {
    проверь_на_ошибки: {
      get: function () {
        return this.catch
      },
      set: function ( значение ) {
        this.catch = значение
      }
    }
  } )
  // Стандарт EcmaScript
  ///////////////////////////////////////////////////////////////


  /////
  // Стандарт DHTML
  консоль                  = console
  консоль.прототип.вывести = console.log
  консоль.прототип.ошибка  = console.error

  задать_время_ожидания = setTimeout

  окно = window
  Объект.определить_свойства( window, {
    после_загрузки          : {
      get: function () {
        return this.onload
      },
      set: function ( значение ) {
        this.onload = значение
      }
    },
    документ                : {
      get: function () {
        return this.document
      },
      set: function ( значение ) {
        this.document = значение
      }
    },
    запросить_следующий_кадр: {
      get: function () {
        return this.requestAnimationFrame
      },
      set: function ( значение ) {
        this.requestAnimationFrame = значение
      }
    }
  } )

  Гипертекстовый_документ = HTMLDocument
  Объект.определить_свойства( Гипертекстовый_документ.прототип, {
    создать_элемент                   : {
      get: function () {
        return this.createElement
      },
      set: function ( значение ) {
        this.createElement = значение
      }
    },
    тело                              : {
      get: function () {
        return this.body
      },
      set: function ( значение ) {
        this.body = значение
      }
    },
    получить_элемент_по_идентификатору: {
      get: function () {
        return this.getElementById
      },
      set: function ( значение ) {
        this.getElementById = значение
      }
    }
  } )

  Гипертекстовый_элемент = HTMLElement
  Объект.определить_свойства( Гипертекстовый_элемент.прототип, {
    добавить_потомка: {
      get: function () {
        return this.appendChild
      },
      set: function ( значение ) {
        this.appendChild = значение
      }
    }
  } )

  Изображение = Image
  Объект.определить_свойства( Изображение.прототип, {
    после_загрузки: {
      get: function () {
        return this.onload
      },
      set: function ( значение ) {
        this.onload = значение
      }
    },
    источник: {
      get: function () {
        return this.src
      },
      set: function ( значение ) {
        this.src = значение
      }
    }
  } )

  // Конец Стандарт DHTML
  /////


  /////
  // Стандарт HTML5
  Гипертекстовый_элемент_холст = HTMLCanvasElement
  Объект.определить_свойства( Гипертекстовый_элемент_холст.прототип, {
    ширина          : {
      get: function () {
        return this.width
      },
      set: function ( значение ) {
        this.width = значение
      }
    },
    высота          : {
      get: function () {
        return this.height
      },
      set: function ( значение ) {
        this.height = значение
      }
    },
    получть_контекст: {
      get: function () {
        return this.getContext
      },
      set: function ( значение ) {
        this.getContext = значение
      }
    }
  } )

  Массив_32б_значений_с_плавающей_точкой = Float32Array
  Массив_16б_значений                    = Uint16Array
  // Конец Стандарт HTML5
  /////


  /////
  // Стандарт Fetch
  получить = fetch

  Ответ                = Response
  Ответ.прототип.текст = Response.prototype.text
  // Конец Стандарт Fetch
  /////


  /////
  // Стандарт WebGL
  Контекст_визуализации_WebGL = WebGLRenderingContext
  Объект.определить_свойства( Контекст_визуализации_WebGL.прототип, {
    задать_цвет_для_очистки                                             : {
      get: function () {
        return this.clearColor
      },
      set: function ( значение ) {
        this.clearColor = значение
      }
    },
    создать_буфер                                                       : {
      get: function () {
        return this.createBuffer
      },
      set: function ( значение ) {
        this.createBuffer = значение
      }
    },
    цвет_для_очистки                                                    : {
      get: function () {
        return this.задать_цвет_для_очистки
      },
      set: function ( значение ) {
        this.задать_цвет_для_очистки( значение[0], значение[1], значение[2], значение[3] )
      }
    },
    задать_область_отрисовки                                            : {
      get: function () {
        return this.viewport
      },
      set: function ( значение ) {
        this.viewport = значение
      }
    },
    область_отрисовки                                                   : {
      get: function () {
        return this.задать_область_отрисовки
      },
      set: function ( значение ) {
        this.задать_область_отрисовки( значение[0], значение[1], значение[2], значение[3] )
      }
    },
    использовать_программу_шейдера                                      : {
      get: function () {
        return this.useProgram
      },
      set: function ( значение ) {
        this.useProgram = значение
      }
    },
    задать_текущий_буфер                                                : {
      get: function () {
        return this.bindBuffer
      },
      set: function ( значение ) {
        this.bindBuffer = значение
      }
    },
    заполнить_текущий_буфер_даными                                      : {
      get: function () {
        return this.bufferData
      },
      set: function ( значение ) {
        this.bufferData = значение
      }
    },
    включить                                                            : {
      get: function () {
        return this.enable
      },
      set: function ( значение ) {
        this.enable = значение
      }
    },
    выключить                                                           : {
      get: function () {
        return this.disable
      },
      set: function ( значение ) {
        this.disable = значение
      }
    },
    проведение_теста_глубины                                            : {
      get: function () {
        return this.DEPTH_TEST
      },
      set: function ( значение ) {
        if (значение) {
          this.включить( this.DEPTH_TEST )
        } else {
          this.выключить( this.DEPTH_TEST )
        }
      }
    },
    получить_расположение_атрибута                                      : {
      get: function () {
        return this.getAttribLocation
      },
      set: function ( значение ) {
        this.getAttribLocation = значение
      }
    },
    получить_расположение_переменной                                    : {
      get: function () {
        return this.getUniformLocation
      },
      set: function ( значение ) {
        this.getUniformLocation = значение
      }
    },
    включить_атрибут_вершин                                             : {
      get: function () {
        return this.enableVertexAttribArray
      },
      set: function ( значение ) {
        this.enableVertexAttribArray = значение
      }
    },
    определить_макет_памяти_для_атрибута_вершин                         : {
      get: function () {
        return this.vertexAttribPointer
      },
      set: function ( значение ) {
        this.vertexAttribPointer = значение
      }
    },
    задать_источник_шейдера                                             : {
      get: function () {
        return this.shaderSource
      },
      set: function ( значение ) {
        this.shaderSource = значение
      }
    },
    получить_параметр_шейдера                                           : {
      get: function () {
        return this.getShaderParameter
      },
      set: function ( значение ) {
        this.getShaderParameter = значение
      }
    },
    компилировать_шейдер                                                : {
      get: function () {
        return this.compileShader
      },
      set: function ( значение ) {
        this.compileShader = значение
      }
    },
    прикрепить_шейдер                                                   : {
      get: function () {
        return this.attachShader
      },
      set: function ( значение ) {
        this.attachShader = значение
      }
    },
    слинковать_программу                                                : {
      get: function () {
        return this.linkProgram
      },
      set: function ( значение ) {
        this.linkProgram = значение
      }
    },
    создать_программу                                                   : {
      get: function () {
        return this.createProgram
      },
      set: function ( значение ) {
        this.createProgram = значение
      }
    },
    создать_шейдер                                                      : {
      get: function () {
        return this.createShader
      },
      set: function ( значение ) {
        this.createShader = значение
      }
    },
    получить_журнал_шейдера                                             : {
      get: function () {
        return this.getShaderInfoLog
      },
      set: function ( значение ) {
        this.getShaderInfoLog = значение
      }
    },
    получить_параметр_программы                                         : {
      get: function () {
        return this.getProgramParameter
      },
      set: function ( значение ) {
        this.getProgramParameter = значение
      }
    },
    задать_переменную_матрицы_4_порядка_со_значениями_с_плавающей_точкой: {
      get: function () {
        return this.uniformMatrix4fv
      },
      set: function ( значение ) {
        this.uniformMatrix4fv = значение
      }
    },
    нарисовать_массивы                                                  : {
      get: function () {
        return this.drawArrays
      },
      set: function ( значение ) {
        this.drawArrays = значение
      }
    },
    нарисовать_элементы                                                 : {
      get: function () {
        return this.drawElements
      },
      set: function ( значение ) {
        this.drawElements = значение
      }
    },
    задать_текущую_текстуру                                             : {
      get: function () {
        return this.bindTexture
      },
      set: function ( значение ) {
        this.bindTexture = значение
      }
    },
    активировать_текстурный_блок                                        : {
      get: function () {
        return this.activeTexture
      },
      set: function ( значение ) {
        this.activeTexture = значение
      }
    },
    задать_режим_хранения_пикселей                                      : {
      get: function () {
        return this.pixelStorei
      },
      set: function ( значение ) {
        this.pixelStorei = значение
      }
    },
    задать_изобрадение_текстуры                                         : {
      get: function () {
        return this.texImage2D
      },
      set: function ( значение ) {
        this.texImage2D = значение
      }
    },
    задать_параметр_текстуры                                            : {
      get: function () {
        return this.texParameteri
      },
      set: function ( значение ) {
        this.texParameteri = значение
      }
    },
    задать_переменную_с_одним_целочислительным_скалярным_аргументом     : {
      get: function () {
        return this.uniform1i
      },
      set: function ( значение ) {
        this.uniform1i = значение
      }
    },
    БУФЕР_МАССИВА                                                       : {
      get: function () {
        return this.ARRAY_BUFFER
      },
      set: function ( значение ) {
        this.ARRAY_BUFFER = значение
      }
    },
    БУФЕР_МАССИВА_ЭЛЕМЕНТОВ                                             : {
      get: function () {
        return this.ELEMENT_ARRAY_BUFFER
      },
      set: function ( значение ) {
        this.ELEMENT_ARRAY_BUFFER = значение
      }
    },
    СТАТИЧЕСКАЯ_ОТРИСОВКА                                               : {
      get: function () {
        return this.STATIC_DRAW
      },
      set: function ( значение ) {
        this.STATIC_DRAW = значение
      }
    },
    ПЛАВАЮЩАЯ_ТОЧКА                                                     : {
      get: function () {
        return this.FLOAT
      },
      set: function ( значение ) {
        this.FLOAT = значение
      }
    },
    СТАТУС_КОМПИЛЯЦИИ                                                   : {
      get: function () {
        return this.COMPILE_STATUS
      },
      set: function ( значение ) {
        this.COMPILE_STATUS = значение
      }
    },
    СТАТУС_ЛИНКОВКИ                                                     : {
      get: function () {
        return this.LINK_STATUS
      },
      set: function ( значение ) {
        this.LINK_STATUS = значение
      }
    },
    ШЕЙДЕР_ВЕРШИН                                                       : {
      get: function () {
        return this.VERTEX_SHADER
      },
      set: function ( значение ) {
        this.VERTEX_SHADER = значение
      }
    },
    ШЕЙДЕР_ФРАГМЕНТОВ                                                   : {
      get: function () {
        return this.FRAGMENT_SHADER
      },
      set: function ( значение ) {
        this.FRAGMENT_SHADER = значение
      }
    },
    ЛЕНТА_ТРЕУГОЛЬНИКОВ                                                 : {
      get: function () {
        return this.TRIANGLE_STRIP
      },
      set: function ( значение ) {
        this.TRIANGLE_STRIP = значение
      }
    },
    ТРЕУГОЛЬНИКИ                                                 : {
      get: function () {
        return this.TRIANGLES
      },
      set: function ( значение ) {
        this.TRIANGLES = значение
      }
    },
    БИТ_БУФЕРА_ЦВЕТА                                                    : {
      get: function () {
        return this.COLOR_BUFFER_BIT
      },
      set: function ( значение ) {
        this.COLOR_BUFFER_BIT = значение
      }
    },
    БИТ_БУФЕРА_ГЛУБИНЫ                                                  : {
      get: function () {
        return this.DEPTH_BUFFER_BIT
      },
      set: function ( значение ) {
        this.DEPTH_BUFFER_BIT = значение
      }
    },
    ДВУМЕРНАЯ_ТЕКСТУРА                                                  : {
      get: function () {
        return this.TEXTURE_2D
      },
      set: function ( значение ) {
        this.TEXTURE_2D = значение
      }
    },
    ПЕРЕВЕРНУТЬ_ВДОЛЬ_ВЕРТИКАЛЬНОЙ_ОСИ                                  : {
      get: function () {
        return this.UNPACK_FLIP_Y_WEBGL
      },
      set: function ( значение ) {
        this.UNPACK_FLIP_Y_WEBGL = значение
      }
    },
    ФИЛЬТР_УВЕЛИЧЕНИЯ_ТЕКСТУРЫ                                          : {
      get: function () {
        return this.TEXTURE_MAG_FILTER
      },
      set: function ( значение ) {
        this.TEXTURE_MAG_FILTER = значение
      }
    },
    ФИЛЬТР_УМЕНЬШЕНИЯ_ТЕКСТУРЫ                                          : {
      get: function () {
        return this.TEXTURE_MIN_FILTER
      },
      set: function ( значение ) {
        this.TEXTURE_MIN_FILTER = значение
      }
    },
    БАЙТ_БЕЗ_ЗНАКА                                                      : {
      get: function () {
        return this.UNSIGNED_BYTE
      },
      set: function ( значение ) {
        this.UNSIGNED_BYTE = значение
      }
    },
    УКОРОЧЕННОЕ_БЕЗ_ЗНАКА                                               : {
      get: function () {
        return this.UNSIGNED_SHORT
      },
      set: function ( значение ) {
        this.UNSIGNED_SHORT = значение
      }
    },
    БЛИЖАЙШИЙ                                                           : {
      get: function () {
        return this.NEAREST
      },
      set: function ( значение ) {
        this.NEAREST = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_0                                                   : {
      get: function () {
        return this.TEXTURE0
      },
      set: function ( значение ) {
        this.TEXTURE0 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_1                                                   : {
      get: function () {
        return this.TEXTURE1
      },
      set: function ( значение ) {
        this.TEXTURE1 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_2                                                   : {
      get: function () {
        return this.TEXTURE2
      },
      set: function ( значение ) {
        this.TEXTURE2 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_3                                                   : {
      get: function () {
        return this.TEXTURE3
      },
      set: function ( значение ) {
        this.TEXTURE3 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_4                                                   : {
      get: function () {
        return this.TEXTURE4
      },
      set: function ( значение ) {
        this.TEXTURE4 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_5                                                   : {
      get: function () {
        return this.TEXTURE5
      },
      set: function ( значение ) {
        this.TEXTURE5 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_6                                                   : {
      get: function () {
        return this.TEXTURE6
      },
      set: function ( значение ) {
        this.TEXTURE6 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_7                                                   : {
      get: function () {
        return this.TEXTURE7
      },
      set: function ( значение ) {
        this.TEXTURE7 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_8                                                   : {
      get: function () {
        return this.TEXTURE8
      },
      set: function ( значение ) {
        this.TEXTURE8 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_9                                                   : {
      get: function () {
        return this.TEXTURE9
      },
      set: function ( значение ) {
        this.TEXTURE9 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_10                                                  : {
      get: function () {
        return this.TEXTURE10
      },
      set: function ( значение ) {
        this.TEXTURE10 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_11                                                  : {
      get: function () {
        return this.TEXTURE11
      },
      set: function ( значение ) {
        this.TEXTURE11 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_12                                                  : {
      get: function () {
        return this.TEXTURE12
      },
      set: function ( значение ) {
        this.TEXTURE12 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_13                                                  : {
      get: function () {
        return this.TEXTURE13
      },
      set: function ( значение ) {
        this.TEXTURE13 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_14                                                  : {
      get: function () {
        return this.TEXTURE14
      },
      set: function ( значение ) {
        this.TEXTURE14 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_15                                                  : {
      get: function () {
        return this.TEXTURE15
      },
      set: function ( значение ) {
        this.TEXTURE15 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_16                                                  : {
      get: function () {
        return this.TEXTURE16
      },
      set: function ( значение ) {
        this.TEXTURE16 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_17                                                  : {
      get: function () {
        return this.TEXTURE17
      },
      set: function ( значение ) {
        this.TEXTURE17 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_18                                                  : {
      get: function () {
        return this.TEXTURE18
      },
      set: function ( значение ) {
        this.TEXTURE18 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_19                                                  : {
      get: function () {
        return this.TEXTURE19
      },
      set: function ( значение ) {
        this.TEXTURE19 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_20                                                  : {
      get: function () {
        return this.TEXTURE20
      },
      set: function ( значение ) {
        this.TEXTURE20 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_21                                                  : {
      get: function () {
        return this.TEXTURE21
      },
      set: function ( значение ) {
        this.TEXTURE21 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_22                                                  : {
      get: function () {
        return this.TEXTURE22
      },
      set: function ( значение ) {
        this.TEXTURE22 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_23                                                  : {
      get: function () {
        return this.TEXTURE23
      },
      set: function ( значение ) {
        this.TEXTURE23 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_24                                                  : {
      get: function () {
        return this.TEXTURE24
      },
      set: function ( значение ) {
        this.TEXTURE24 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_25                                                  : {
      get: function () {
        return this.TEXTURE25
      },
      set: function ( значение ) {
        this.TEXTURE25 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_26                                                  : {
      get: function () {
        return this.TEXTURE26
      },
      set: function ( значение ) {
        this.TEXTURE26 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_27                                                  : {
      get: function () {
        return this.TEXTURE27
      },
      set: function ( значение ) {
        this.TEXTURE27 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_28                                                  : {
      get: function () {
        return this.TEXTURE28
      },
      set: function ( значение ) {
        this.TEXTURE28 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_29                                                  : {
      get: function () {
        return this.TEXTURE29
      },
      set: function ( значение ) {
        this.TEXTURE29 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_30                                                  : {
      get: function () {
        return this.TEXTURE30
      },
      set: function ( значение ) {
        this.TEXTURE30 = значение
      }
    },
    ТЕКСТУРНЫЙ_БЛОК_31                                                  : {
      get: function () {
        return this.TEXTURE31
      },
      set: function ( значение ) {
        this.TEXTURE31 = значение
      }
    },

    очистить: {
      get: function () {
        return this.clear
      },
      set: function ( значение ) {
        this.clear = значение
      }
    },
  } )
  // Стандарт WebGL
  /////

}

// Конец Русификации JavaScript #1 (номер задачи на GitHub)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Вспомогательные классы

Время                = function () {
  Время.текущая_отсечка   = new Дата().получить_время()
  Время.функция_изменения = задать_время_ожидания( Время, 10 )
  время                   = (Время.текущая_отсечка - Время.первая_отсечка) / 1000
}
Время.первая_отсечка = new Дата().получить_время()
Время() // Запускаем время

Формат_файла = function ( путь_к_файлу ) {
  for (let положение_точки = путь_к_файлу.длинна; положение_точки >= 0; положение_точки--) {
    if (путь_к_файлу[положение_точки] === '.') {
      return путь_к_файлу.вырезать_строку( положение_точки + 1 )
    }
  }
}

Холст = function ( идентификатор_элемента ) {
  let холст = документ.получить_элемент_по_идентификатору( идентификатор_элемента )

  холст.ширина = 500
  холст.высота = 500

  return холст
}
Буфер = function ( данные, художник, сделать_шестнадцать_бит ) {
  let буфер = художник.создать_буфер()

  if (сделать_шестнадцать_бит) {
    художник.задать_текущий_буфер( художник.БУФЕР_МАССИВА_ЭЛЕМЕНТОВ, буфер )
    художник.заполнить_текущий_буфер_даными( художник.БУФЕР_МАССИВА_ЭЛЕМЕНТОВ,
                                             new Массив_16б_значений( данные ),
                                             художник.СТАТИЧЕСКАЯ_ОТРИСОВКА )
  } else {
    художник.задать_текущий_буфер( художник.БУФЕР_МАССИВА, буфер )
    художник.заполнить_текущий_буфер_даными( художник.БУФЕР_МАССИВА,
                                             new Массив_32б_значений_с_плавающей_точкой( данные ),
                                             художник.СТАТИЧЕСКАЯ_ОТРИСОВКА )
  }

  return буфер
}

Текстура = function ( путь_к_файлу_текстуры, художник ) {
  let текстура = художник.createTexture();

  текстура.обработчик_загруженной_текстуры = function ( текстура, художник ) {
    художник.задать_текущую_текстуру( художник.ДВУМЕРНАЯ_ТЕКСТУРА, текстура );
    художник.задать_режим_хранения_пикселей( художник.ПЕРЕВЕРНУТЬ_ВДОЛЬ_ВЕРТИКАЛЬНОЙ_ОСИ, true );
    художник.задать_изобрадение_текстуры( художник.ДВУМЕРНАЯ_ТЕКСТУРА, 0, художник.RGBA, художник.RGBA,
                                          художник.БАЙТ_БЕЗ_ЗНАКА, текстура.изображение );
    художник.задать_параметр_текстуры( художник.ДВУМЕРНАЯ_ТЕКСТУРА, художник.ФИЛЬТР_УВЕЛИЧЕНИЯ_ТЕКСТУРЫ,
                                       художник.БЛИЖАЙШИЙ );
    художник.задать_параметр_текстуры( художник.ДВУМЕРНАЯ_ТЕКСТУРА, художник.ФИЛЬТР_УМЕНЬШЕНИЯ_ТЕКСТУРЫ,
                                       художник.БЛИЖАЙШИЙ );
    художник.задать_текущую_текстуру( художник.ДВУМЕРНАЯ_ТЕКСТУРА, null );
  }

  текстура.изображение                = new Изображение();
  текстура.изображение.после_загрузки = function () {
    текстура.обработчик_загруженной_текстуры( текстура, художник )
  }

  текстура.изображение.источник = путь_к_файлу_текстуры;

  return текстура
}

Шейдерная_программа = function ( художник, код_вершинного_шейдера, код_фрагментного_шейдера,
                                 таблица_соответствия_данным_модели_и_переменным_шейдеров ) {
  программа_шейдера = художник.создать_программу()

  художник.вершинный_шейдер = художник.создать_шейдер( художник.ШЕЙДЕР_ВЕРШИН )
  художник.задать_источник_шейдера( художник.вершинный_шейдер, код_вершинного_шейдера )
  художник.компилировать_шейдер( художник.вершинный_шейдер )

  художник.фрагментный_шейдер = художник.создать_шейдер( художник.ШЕЙДЕР_ФРАГМЕНТОВ )
  художник.задать_источник_шейдера( художник.фрагментный_шейдер, код_фрагментного_шейдера )
  художник.компилировать_шейдер( художник.фрагментный_шейдер )

  if (!художник.получить_параметр_шейдера( художник.вершинный_шейдер, художник.СТАТУС_КОМПИЛЯЦИИ )) {
    консоль.вывести( художник.СТАТУС_КОМПИЛЯЦИИ )
    консоль.вывести( художник.получить_журнал_шейдера( художник.вершинный_шейдер ) )
  }

  if (!художник.получить_параметр_шейдера( художник.фрагментный_шейдер, художник.СТАТУС_КОМПИЛЯЦИИ )) {
    консоль.вывести( художник.СТАТУС_КОМПИЛЯЦИИ )
    консоль.вывести( художник.получить_журнал_шейдера( художник.фрагментный_шейдер ) )
  }

  художник.прикрепить_шейдер( программа_шейдера, художник.фрагментный_шейдер )
  художник.прикрепить_шейдер( программа_шейдера, художник.вершинный_шейдер )
  художник.слинковать_программу( программа_шейдера )

  if (!художник.получить_параметр_программы( программа_шейдера, художник.СТАТУС_ЛИНКОВКИ )) {
    консоль.вывести( художник.получить_параметр_программы( программа_шейдера, художник.СТАТУС_ЛИНКОВКИ ) )
  }

  for (название_атрибута in таблица_соответствия_данным_модели_и_переменным_шейдеров) {
    if (!(таблица_соответствия_данным_модели_и_переменным_шейдеров.содержит_собственное_свойство( название_атрибута )))
      continue

    атрибут = таблица_соответствия_данным_модели_и_переменным_шейдеров[название_атрибута]
    художник.включить_атрибут_вершин( художник.получить_расположение_атрибута( программа_шейдера, атрибут ) )
  }

  художник.использовать_программу_шейдера( программа_шейдера )

  return программа_шейдера
}

// Конец Вспомогательные классы
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Вспомогательные функции

// Работа с сетью
запрос = async function ( ссылка ) {
  try {
    let ответ = await получить( ссылка )
    let текст = await ответ.текст()

    if (Формат_файла( ссылка ) === 'json') {
      текст = в_объект( текст )
    }

    return текст
  } catch (ошибка) {
    консоль.ошибка( ошибка )
  }
}


// Математика. Тригонометрия

градусы_в_радианы = function ( градусы ) {
  return градусы * ПИ / 180
}


// Математика. Матрицы

усечённая_пирамида_из_матрицы                 = function ( а, б, в, г, д, е ) {
  ф = []

  х = б - а
  и = г - в
  к = е - д

  ф[0]  = д * 2 / х
  ф[1]  = 0
  ф[2]  = 0
  ф[3]  = 0
  ф[4]  = 0
  ф[5]  = д * 2 / и
  ф[6]  = 0
  ф[7]  = 0
  ф[8]  = (б + а) / х
  ф[9]  = (г + в) / и
  ф[10] = -(е + д) / к
  ф[11] = -1
  ф[12] = 0
  ф[13] = 0
  ф[14] = -(е * д * 2) / к
  ф[15] = 0

  return ф
}
получить_матрицу_перспективной_проекции       = function ( а, б, в, г ) {
  а = в * тангенс( а / 2 )
  б = а * б
  return усечённая_пирамида_из_матрицы( -б, б, -а, а, в, г )
}
получить_единичную_матрицу_четвёртого_порядка = function () {
  а = []

  а[0]  = 1
  а[1]  = 0
  а[2]  = 0
  а[3]  = 0
  а[4]  = 0
  а[5]  = 1
  а[6]  = 0
  а[7]  = 0
  а[8]  = 0
  а[9]  = 0
  а[10] = 1
  а[11] = 0
  а[12] = 0
  а[13] = 0
  а[14] = 0
  а[15] = 1

  return а
}
перенести_матрицу                             = function ( а, б, в ) {
  г = б[0]
  д = б[1]
  б = б[2]

  if (!в || а === в) {
    а[12] = а[0] * г + а[4] * д + а[8] * б + а[12]
    а[13] = а[1] * г + а[5] * д + а[9] * б + а[13]
    а[14] = а[2] * г + а[6] * д + а[10] * б + а[14]
    а[15] = а[3] * г + а[7] * д + а[11] * б + а[15]

    return а
  }

  е = а[0]
  ж = а[1]
  з = а[2]
  и = а[3]
  к = а[4]
  л = а[5]
  м = а[6]
  о = а[7]
  п = а[8]
  р = а[9]
  с = а[10]
  т = а[11]

  в[0]  = е
  в[1]  = ж
  в[2]  = з
  в[3]  = и
  в[4]  = к
  в[5]  = л
  в[6]  = м
  в[7]  = о
  в[8]  = п
  в[9]  = р
  в[10] = с
  в[11] = т
  в[12] = е * г + к * д + п * б + а[12]
  в[13] = ж * г + л * д + р * б + а[13]
  в[14] = з * г + м * д + с * б + а[14]
  в[15] = и * г + о * д + т * б + а[15]

  return в
}
вращать_матрицу                               = function ( а, б, в, г ) {
  let д = в[0],
      е = в[1];
  в     = в[2];
  let ё = Math.sqrt( д * д + е * е + в * в );
  if (!ё) return null;
  if (ё !== 1) {
    ё = 1 / ё;
    д *= ё;
    е *= ё;
    в *= ё
  }
  let ж = Math.sin( б ),
      з = Math.cos( б ),
      и = 1 - з;
  б     = а[0];
  ё     = а[1];
  let й = а[2],
      к = а[3],
      л = а[4],
      м = а[5],
      н = а[6],
      о = а[7],
      п = а[8],
      р = а[9],
      А = а[10],
      Б = а[11],
      с = д * д * и + з,
      т = е * д * и + в * ж,
      у = в * д * и - е * ж,
      ф = д * е * и - в * ж,
      х = е * е * и + з,
      ц = в * е * и + д * ж,
      ч = д * в * и + е * ж;
  д     = е * в * и - д * ж;
  е     = в * в * и + з;
  if (г) {
    if (а !== г) {
      г[12] = а[12];
      г[13] = а[13];
      г[14] = а[14];
      г[15] = а[15]
    }
  } else г = а;
  г[0]  = б * с + л * т + п * у;
  г[1]  = ё * с + м * т + р * у;
  г[2]  = й * с + н * т + А * у;
  г[3]  = к * с + о * т + Б * у;
  г[4]  = б * ф + л * х + п * ц;
  г[5]  = ё * ф + м * х + р * ц;
  г[6]  = й * ф + н * х + А * ц;
  г[7]  = к * ф + о * х + Б * ц;
  г[8]  = б * ч + л * д + п * е;
  г[9]  = ё * ч + м * д + р * е;
  г[10] = й * ч + н * д + А * е;
  г[11] = к * ч + о * д + Б * е;
  return г
};
масштабировать_матрицу                        = function ( а, б, в ) {
  let г = б[0],
      д = б[1];
  б     = б[2];
  if (!в || а === в) {
    а[0] *= г;
    а[1] *= г;
    а[2] *= г;
    а[3] *= г;
    а[4] *= д;
    а[5] *= д;
    а[6] *= д;
    а[7] *= д;
    а[8] *= б;
    а[9] *= б;
    а[10] *= б;
    а[11] *= б;
    return а
  }
  в[0]  = а[0] * г;
  в[1]  = а[1] * г;
  в[2]  = а[2] * г;
  в[3]  = а[3] * г;
  в[4]  = а[4] * д;
  в[5]  = а[5] * д;
  в[6]  = а[6] * д;
  в[7]  = а[7] * д;
  в[8]  = а[8] * б;
  в[9]  = а[9] * б;
  в[10] = а[10] * б;
  в[11] = а[11] * б;
  в[12] = а[12];
  в[13] = а[13];
  в[14] = а[14];
  в[15] = а[15];
  return в
};
приравнять_матрицы                            = function ( а, б ) {
  б[0]  = а[0]
  б[1]  = а[1]
  б[2]  = а[2]
  б[3]  = а[3]
  б[4]  = а[4]
  б[5]  = а[5]
  б[6]  = а[6]
  б[7]  = а[7]
  б[8]  = а[8]
  б[9]  = а[9]
  б[10] = а[10]
  б[11] = а[11]
  б[12] = а[12]
  б[13] = а[13]
  б[14] = а[14]
  б[15] = а[15]

  return б
}

// Конец Вспомогательные функции
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Класс Художник

Художник = function ( холст, код_вершинного_шейдера, код_фрагментного_шейдера,
                      таблица_соответствия_данным_модели_и_переменным_шейдеров ) {
  let художник = холст.получть_контекст( 'webgl' )

  художник.ширина_области_отрисовки = холст.ширина || 500
  художник.высота_области_отрисовки = холст.высота || 500
  художник.цвет_для_очистки         = [0.0, 0.0, 0.0, 0.1]
  художник.массив_матриц_модель_вид = []
  художник.проведение_теста_глубины = да
  художник.соотношение_сторон       = художник.ширина_области_отрисовки / художник.высота_области_отрисовки
  художник.матрица_проекции         = получить_матрицу_перспективной_проекции( 45, художник.соотношение_сторон, 0.1,
                                                                               1000.0 )
  художник.матрица_модель_вид       = получить_единичную_матрицу_четвёртого_порядка()
  художник.шейдерная_программа      = Шейдерная_программа( художник, код_вершинного_шейдера, код_фрагментного_шейдера,
                                                           таблица_соответствия_данным_модели_и_переменным_шейдеров )

  художник.таблица_соответствия_данным_модели_и_переменным_шейдеров =
    таблица_соответствия_данным_модели_и_переменным_шейдеров

  художник.сохранить_матрицу_модель_вид = function ( матрица_модель_вид ) {
    художник.копия = []
    приравнять_матрицы( матрица_модель_вид, художник.копия )
    художник.массив_матриц_модель_вид.добавить( художник.копия )
  }

  художник.удалить_последнюю_матрицу_модель_вид = function () {
    if (художник.массив_матриц_модель_вид.длинна === 0) {
      throw 'Некорректное удаление Матрицы! Архитектор в печали :('
    }
    художник.матрица_модель_вид = художник.массив_матриц_модель_вид.удалить_последний()
  }

  художник.очистить_холст = function ( аргументы ) {
    художник.очистить( аргументы | художник.БИТ_БУФЕРА_ЦВЕТА | художник.БИТ_БУФЕРА_ГЛУБИНЫ )
  }

  художник.нарисовать = function ( предмет ) {
    соответствие           = художник.таблица_соответствия_данным_модели_и_переменным_шейдеров
    количество_компонентов = 0

    for (название_атрибута in соответствие) {
      if (!(соответствие.содержит_собственное_свойство( название_атрибута ))) break
      switch (название_атрибута) {
        case 'вершины':
          художник.задать_текущий_буфер( художник.БУФЕР_МАССИВА, предмет.буфер_вершин )
          количество_компонентов = 3
          break
        case 'цвета':
          художник.задать_текущий_буфер( художник.БУФЕР_МАССИВА, предмет.буфер_цветов )
          количество_компонентов = 4
          break
        case 'координаты_текстуры':
          if (предмет.данные_текстуры.координаты) {
            художник.задать_текущий_буфер( художник.БУФЕР_МАССИВА, предмет.буфер_координат_текстуры )
            количество_компонентов = 2

            художник.активировать_текстурный_блок( художник.ТЕКСТУРНЫЙ_БЛОК_0 );
            художник.задать_текущую_текстуру( художник.ДВУМЕРНАЯ_ТЕКСТУРА, предмет.текстура );
            художник.задать_переменную_с_одним_целочислительным_скалярным_аргументом(
              художник.получить_расположение_переменной( художник.шейдерная_программа, "uniform_sempler" ), 0 );
          }
          break
        default:
          break
      }

      художник.определить_макет_памяти_для_атрибута_вершин(
        художник.получить_расположение_атрибута( художник.шейдерная_программа, соответствие[название_атрибута] ),
        количество_компонентов, художник.ПЛАВАЮЩАЯ_ТОЧКА, нет, 0, 0 )
    }

    if (предмет.буфер_индексов) {
      художник.задать_текущий_буфер( художник.БУФЕР_МАССИВА_ЭЛЕМЕНТОВ, предмет.буфер_индексов )

      художник.нарисовать_элементы( художник.ТРЕУГОЛЬНИКИ, предмет.индексы.длинна, художник.УКОРОЧЕННОЕ_БЕЗ_ЗНАКА, 0 )
    } else {
      художник.нарисовать_массивы( художник.ЛЕНТА_ТРЕУГОЛЬНИКОВ, 0, предмет.вершины.длинна / 3 )
    }

  }

  художник.нарисовать_кадр = function () {
    художник.очистить_холст()

    for (счётчик = 0; счётчик < художник.набор_предметов.длинна; счётчик++) {
      художник.предмет = художник.набор_предметов[счётчик]

      художник.сохранить_матрицу_модель_вид( художник.матрица_модель_вид )


      // Перенос
      if (художник.предмет.координаты) {
        let координаты             = художник.предмет.координаты
        let вычисленные_координаты = [координаты[0], координаты[1], координаты[2]]
        if (typeof координаты[0] === 'function') вычисленные_координаты[0] = координаты[0]()
        if (typeof координаты[1] === 'function') вычисленные_координаты[1] = координаты[1]()
        if (typeof координаты[2] === 'function') вычисленные_координаты[2] = координаты[2]()
        перенести_матрицу( художник.матрица_модель_вид, вычисленные_координаты )
      }

      // Вращение
      if (художник.предмет.углы_поворота) {
        let углы_поворота = художник.предмет.углы_поворота

        for (let счётчик_2 = 0; счётчик_2 < углы_поворота.длинна; счётчик_2++) {
          let вычисленный_угол = углы_поворота[счётчик_2][0]
          let вычисленная_ось  = углы_поворота[счётчик_2][1]
          if (typeof углы_поворота[счётчик_2][0] === 'function') вычисленный_угол = углы_поворота[счётчик_2][0]()
          if (typeof углы_поворота[счётчик_2][1] === 'function') вычисленная_ось = углы_поворота[счётчик_2][1]()
          вращать_матрицу( художник.матрица_модель_вид, градусы_в_радианы( вычисленный_угол ), вычисленная_ось )
        }
      }

      // Масштабирование
      if (художник.предмет.масштаб) {
        let масштаб             = художник.предмет.масштаб
        let вычисленный_масштаб = [масштаб[0], масштаб[1], масштаб[2]]
        if (typeof масштаб[0] === 'function') вычисленный_масштаб[0] = масштаб[0]()
        if (typeof масштаб[1] === 'function') вычисленный_масштаб[1] = масштаб[1]()
        if (typeof масштаб[2] === 'function') вычисленный_масштаб[2] = масштаб[2]()
        масштабировать_матрицу( художник.матрица_модель_вид, вычисленный_масштаб )
      }


      художник.задать_переменную_матрицы_4_порядка_со_значениями_с_плавающей_точкой(
        художник.получить_расположение_переменной( художник.шейдерная_программа, 'uniform_matrica_proekcii' ), нет,
        художник.матрица_проекции )
      художник.задать_переменную_матрицы_4_порядка_со_значениями_с_плавающей_точкой(
        художник.получить_расположение_переменной( художник.шейдерная_программа, 'uniform_matrica_model_vid' ), нет,
        художник.матрица_модель_вид )

      художник.нарисовать( художник.предмет )
      художник.удалить_последнюю_матрицу_модель_вид()
    }

    запросить_следующий_кадр( художник.нарисовать_кадр )
  }


  художник.нарисуй = function ( набор_предметов ) {
    художник.набор_предметов = набор_предметов

    for (счётчик = 0; счётчик < художник.набор_предметов.длинна; счётчик++) {
      художник.предмет = художник.набор_предметов[счётчик]

      if (художник.предмет.вершины) художник.предмет.буфер_вершин = Буфер( художник.предмет.вершины, художник )
      if (художник.предмет.цвета) художник.предмет.буфер_цветов = Буфер( художник.предмет.цвета, художник )
      if (художник.предмет.индексы) художник.предмет.буфер_индексов = Буфер( художник.предмет.индексы, художник, true )

      if (художник.предмет.данные_текстуры) {
        художник.предмет.текстура                 = Текстура( художник.предмет.данные_текстуры.путь_к_файлу, художник )
        художник.предмет.буфер_координат_текстуры = Буфер( художник.предмет.данные_текстуры.координаты, художник )
      }
    }

    художник.нарисовать_кадр()
  }

  return художник
}

Художник.прототип.предмет                                = {}
Художник.прототип.предмет.масштаб                        = []
Художник.прототип.предмет.углы_поворота                  = []
Художник.прототип.предмет.координаты                     = []
Художник.прототип.предмет.индексы                        = []
Художник.прототип.предмет.данные_текстуры                = []
Художник.прототип.предмет.данные_текстуры.название_файла = []
Художник.прототип.предмет.данные_текстуры.путь_к_файлу   = []

// Конец Класс Художник
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////