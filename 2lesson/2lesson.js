'use strict'

/* 1 */
/*
Необходимо разобраться почему работает именно так. Объяснения написать в виде комментария к каждой строчке
*/
var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 // a = a + 1 = 2; c = a
d = b++; alert(d); // 1 // d = b; b = b + 1 = 2

c = (2+ ++a); alert(c); // 5 // a = a + 1; a = 3; c = (2 + 3) = 5 
d = (2+ b++); alert(d); // 4 // d = (2 + 2); d = 4; b = b + 1 = 3

alert(a); // 3
alert(b); // 3

/* 2 */
var a = 2;
var x = 1 + (a *= 2) // x = 1 + ( a = a * 2) = 1 + 4 = 5

/* 3 */
/* 
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
*/

var i = 1;

for (; i <= 100; i++) {
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log('FizzBuzz',i);
  }
  else {
    if (i%5 == 0) {
      console.log('Buzz',i);
    }
    if (i%3 == 0) {
      console.log('Fizz',i);
    }
  }
}
