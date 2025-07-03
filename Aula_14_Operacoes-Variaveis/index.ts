var a: number = 10;
var b: number = 8;

a = a + 1;
//console.log(a);

b = a + 1;
//console.log(b);

a = a + b;
//console.log(a);

b = a - b + 1;
//console.log(b);

a = b + 1 + a;
//console.log(a);

// Incremento
a = a + 1;
a = a + 1;
a = a + 1;
//console.log(a);

// Decremento
a = a - 1;
a = a - 1;
//console.log(a);

b = b * 2;

a = a * 2 + b + 1;

console.log(a, b);
