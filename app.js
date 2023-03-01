//1.
function zbir(num1, num2) {
  suma = 0;
  for (i = num1; i <= num2; i++) {
    let a = i.toString();
    if (a.includes("5")) continue;
    else suma++;
  }
  return suma;
}
console.log(zbir(4, 17));

//1.
function sum(num1, num2) {
  sum = 0;
  for (i = num1; i <= num2; i++) {
    br = i;
    flag = 0;
    while (br > 1) {
      cifra = br % 10;
      br = Math.trunc(br / 10);
      if (cifra == 5) flag++;
    }
    if (flag == 0) sum++;
  }
  return sum;
}
console.log(sum(4, 6));

//2.
function small(niz, izbor) {
  min = niz[0];
  if (izbor == "index") return 0;
  else if (izbor == "value") {
    for (let num of niz) {
      if (num < min) min = num;
    }
    return min;
  } else return `pogresan unos`;
}
console.log(small([5, 2, 8, -1], "value"));
