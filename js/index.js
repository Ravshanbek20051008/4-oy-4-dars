// if hamd mantiqy opertorlar bilan ishlash
// 1-masala
// let a = +prompt("1-son");
// let b = +prompt("2-son");
// let c = +prompt("3-son");
// let result;
// if (a > b || (b > c && c > 0)) {
//   result = "sharrt bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 2-masala
// let string1 = prompt("birinchi string");
// let string2 = prompt("ikkinchi string");
// let result;
// if ((string1.length > 5 && string1.includes("a")) || string2.startsWith("b")) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 3-masala
// let a = +prompt("1-son");
// let b = +prompt("2-son");
// let c = +prompt("3-son");
// let d = +prompt("4-son");
// let result;
// if ((a + b + c + d == 50 && a > 10) || b > 10 || c > 10 || d > 10) {
//   result = "Yigindi katta va hech bo'lmaganda biri katta";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 4-masala
// let a = +prompt("1-son");
// let b = +prompt("2-son");
// let result;
// if (a * b > 100 || (a + b > 20 && a % 2 == 0)) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 5-masala
// let string1 = prompt("yozing");
// let a = +prompt("1-son");
// let result;
// if (string1.length > a / 2 || (a > 50 && string1.endsWith("z"))) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 6-masala
// let a = +prompt("1-son");
// let b = +prompt("2-son");
// let result;
// if ((a % b == 0 && b > 0) || b % 5 == 0) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 7-masla
// let a = +prompt("1-son");
// let b = +prompt("2-son");
// let c = +prompt("3-son");
// let result;
// if ((a > 0 && b > 0 && c > 0 && b < a ** 2) || c % 2 == 1) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 8-masala
// let string1 = prompt("yozing");
// let string2 = prompt("yozing");
// let a = +prompt("1-son");
// let result;
// if ((string1.length > a && string2.startsWith("hello")) || a % 2 == 0) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 9-masla
// let a = +prompt("1-son");
// let b = +prompt("2-son");
// let c = +prompt("3-son");
// let min;
// let max;
// let result;
// if (a > b) {
//   min = b;
//   max = a;
// } else {
//   min = a;
//   max = b;
// }
// if (c > max) {
//   max = c;
// }
// if (c < min) {
//   min = c;
// }
// let otracha = a + b + c - max - min;
// if ((otracha > 10 && a > b) || a < 15) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);
// 10-masala
// let string1 = prompt("yozing");
// let string2 = prompt("yozing");
// let result;
// if (
//   (string1.length > 8 && string1.includes("e")) ||
//   (string2.length > 8 && string2.endsWith("y"))
// ) {
//   result = "shart bajarildi";
// } else {
//   result = "yeb qoydingiz";
// }
// console.log(result);

// Ternary operatorlari bilan ishlash
// 1-masla
// let a = +prompt("1-son");
// let result = a > 0 ? "musbat" : "manfiy";
// console.log(result);

// 2-masla
// let a = +prompt("1-son");
// let b = +prompt("2-son");
// let result = a > b ? "birinchi son katta" : "ikkinchi son katta";
// console.log(result);
// 3-masala
// let string = prompt("birinchi string");
// let result = string.length > 5 ? "uzun string" : "kalta string";
// console.log(result);
// 4-masala
// let a = +prompt("1-son");
// let result = a % 2 == 0 ? "juft" : "toq";
// console.log(result);
// 5-masla
// let a = +prompt("1-son");
// let result = a > 0 ? "musbat" : "nol yoki manfiy";
// console.log(result);

// Switch case bilan ishlash
// 1-masla
// let a = +prompt("son");
// switch (a) {
//   case 1:
//     console.log("dushanba");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("chorshanba");
//     break;
//   case 4:
//     console.log("pashanba");
//     break;
//   case 5:
//     console.log("juma");
//     break;
//   case 6:
//     console.log("shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;
//   case 8:
//     console.log("bunday hafta kuni yoq");
//     break;
// }
// 2-masala
// let a = +prompt("son");
// switch (a) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("baxor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("kuz");
//     break;
// }
// 3-masala
// let a = +prompt("son");
// switch (a) {
//   case 1:
//     console.log("birinchi");
//     break;
//   case 2:
//     console.log("ikkinchi");
//     break;
//   case 3:
//     console.log("uchinchi");
//     break;
//   case 4:
//     console.log("tochinchi");
//     break;
//   case 5:
//     console.log("beshinchi");
//     break;
//   case 6:
//     console.log("oltinchi");
//     break;
//   case 7:
//     console.log("yetinchi");
//     break;
//   case 8:
//     console.log("sakkizinchi");
//   case 9:
//     console.log("toqqizinchi");
//     break;
//   case 10:
//     console.log("oninchi");
//     break;
//   case 11:
//     console.log("on birinchi");
//     break;
//   case 12:
//     console.log("on ikkinchi");
//     break;
//   case 13:
//     console.log("boshqa son yozing bu qiymat yoq");
//     break;
// }

// forga doir masalar
// 1-masala
// let kod = "kod yozing";
// for (let i = 1; i <= 10; i++) {
//   console.log(i * i);
// }
// 2-masala
// let i = prompt("kod yozing");
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// 3-masala
// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16];
// for (let i = 0; i <= massiv.length; i++) {
//   console.log(massiv[i]);
// }
// 4-masala
// let i = 0;
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// 5-masala
// let massiv = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -16];
// for (let i = 0; i <= massiv.length; i++) {
//   console.log(massiv[i]);
// }
// 6-masala
// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16];
// let yigindi = 0;
// for (let i = 0; i <= massiv.length; i++) {
//   console.log(massiv[i]);
//   yigindi += massiv[i];
// }
// 7-masalalet fibonachchi = [0, 1];

for (let i = 2; i < 10; i++) {
  fibonachchi[i] = fibonachchi[i - 1] + fibonachchi[i - 2];
}
for (let i = 0; i < fibonachchi.length; i++) {
  console.log(fibonachchi[i]);
}
