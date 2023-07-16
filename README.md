# Zeros
Учебная задача по JS

## Задача
Реализовать функцию `getZerosCount`, которая принимает любое целое число `number` (`1 <= число <= 10^8`) в качестве единственного аргумента. Необходимо вычислить *сколько нулей в конце числа результата, которое является факториалом `number`*

Пример:
```js
    const zerosCount = getZerosCount(10); // Факториал 10-ти это 3628800
    console.log(zerosCount); // 2 (Потому что в конце числа 3628800 дво ноля)
```

### Важно!
Не пытайтьтя вычислить факториал! Во-первых, вы не получится точного ответа на больших числах. Во-вторых, вычисление факториала больших целых чисел может занять несколько лет! Необходимо придумать свое потрясающее решение без таких расчетов.

## Как тестировать

- Запустить `npm install` в терминале
- Запустить `npm test` в терминале
- Вы сможете увидеть количество пройденных и провалившихся тестов
