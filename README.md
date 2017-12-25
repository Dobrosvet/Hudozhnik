## Художник.JS
Бибилотека для разработки 3D JavaScript приложений написанная приемущественно на русском языке.

Цель проекта: создать русскоязычную библиотеку для 3D визуализации и анимации, в будущем планируется использовать её для
создания игры.

Прошу не судить строго так как программирование изучал самостоятельно, а так же это мой первый проект с использованием
системы контроля версий. 

Рекомендуемая среда разработки: JetBrains WebStorm<br>
Проект создан: 22.12.2017

#### Правила отправки запросов на объединение (pull request'ов)
- Комментарии к коммитам самое важное в вашем запросе, что бы знать что и зачем! сделано, рекомендую прочитать статью
  по этому поводу "<a href="https://habrahabr.ru/company/Voximplant/blog/276695/">Как оформлять коммиты, чтобы потом не
  было больно</a>".
- При изменении участка кода под определённым номером задачи, нужно указывать номер этой задачи в комментарии к снимкам
  (commit'ам) поставив перед ним знак решётки "#"
- Общий формат комментариев такой<br>
  На первой строчке, коротко о сути проделанной работы представьте что это заголовок новости. Далее, вторя, пустая строка.
  Далее, треться строка, идёт подробное но наиболее краткое описание проделанной работы<br>
  <pre>
  Общее описание изменений (тема изменений) номер задачи на GitHub

  Развёрнутый комментарий
  </pre>


#### Правила по стилю программирования для данного репозитория.
- Весь код который возможно написать на русском пишется на русском, а также все термины. (Возражения и дискусии по этому
  поводу не принимаются). Термины которые могут иметь разный смысл дополняются пояснением на русском или в скобках
  указывается английский вариант.
- Принимаются предложения по улучшению стиля кода, конструкций, приёмов, названий функций и переменных, по облегчению
  смысловой составляющей кода и так далее.
- Названия переменных и функций пушутся в "<a href="https://ru.wikipedia.org/wiki/Snake_case">змеином_регистре</a>"
- Длинна строки не должна быть больше 120 символов
- Отступ 2 пробела (Settings > Editor > Code Style > JavaScript > Tabs and Indents > изменить значения на 2)
- Выравнивание присваивания переменных (Settings > Editor > Code Style > JavaScript > Wrapping and Braces >
  Variable declarations установить в Wrap always и Variable declarations > Align установить в When grouped
- Не использовать ключевые слова var, const
- По возможности следуйте этим стандартам https://standardjs.com/rules если в правилах этого репозитория не оговорено
  иное

#### Заметки по настройке среды разработки JetBrains
- Для игнорирования предупреждений что точка с запятой ";" отсутствует в конце выражения.
  Нужно зайти в File > Settings > Editor > Inspections > JavaScript > Снять галочку с пункта "Unterminated statement"
- Отключить предупреждения что переменная объявлена без var<br>
  Inspections > JavaScript > General > Imlpicicty declared global JavaScript variable убрать галочку
- Включить предупреждения что строка длинее правого отступа (он должен быть 120)<br>
  Inspections > General > Line is longer than allowed code style поставить галочку
- Отключение предупреждений о грамматических ошибках<br>
  Inspections > Spelling > Typo снять галочку