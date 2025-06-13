var a = 35;
var b = 32;
var c = 30;
// Se A > B e B > C, imprima "Feliz"
// Se A < B ou B > C, imprima "Confuso"
// Se A > B e B != C, imprima "Triste"
if (a > b && b > c) {
    console.log("Feliz");
}
else if (a < b || b > c) {
    console.log("Confuso");
}
else if (a > b && !(b == c)) {
    console.log("Triste");
}
