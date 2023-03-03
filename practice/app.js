// 1. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function line(num) {
  string1 = num.toString();
  string2 = "";
  for (i = 0; i < string1.length; i++) {
    string2 += string1[i];
    if (string1[i + 1] % 2 == 0 && string1[i] % 2 == 0) string2 += "-";
  }
  return string2;
}
console.log(line(3443));

//2. Write a program in JS to find majority element of an array

function max(arr) {
  max = arr[0];
  maxnum = 1;
  num = 0;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) num++;
      if (num > maxnum) {
        maxnum = num;
        max = arr[i];
      }
    }
    num = 0;
  }
  return max;
}

console.log(max([1, 3, 3, 3, 3, 1]));

//3. Write a program in C to find the missing number from a given array. There are no duplicates in the list.

function missingNum(arr) {
  maxnum = arr[0];
  min = arr[0];
  flag = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxnum) maxnum = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  for (i = min; i < maxnum; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i == arr[j]) flag++;
    }

    if (flag == 0) return i;
    flag = 0;
  }
  return 1;
}

console.log(missingNum([1, 2, 3, 6, 7, 4]));

// Write a program in JS to find largest number possible from the set of given numbers

function maxnumber(arr) {
  string = "";
  arr1 = [];
  for (let number of arr) {
    if (number > 9) {
      while (number > 1) {
        arr1.push(number % 10);
        number = Math.trunc(number / 10);
      }
    }
    arr1.push(number);
  }
  arr2 = arr1.sort((a, b) => {
    return b - a;
  });
  for (i = 0; i < arr2.length; i++) {
    string += arr2[i];
  }
  return +string;
}
console.log(maxnumber([15, 628, 971, 9, 2143, 12]));

//Write a program in JS to count all distinct pairs for a specific difference.

function pairs(arr, num) {
  arr1 = [];
  for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) == num) {
        arr1.push([arr[j], arr[i]]);
      }
    }
  }
  return arr1;
}
console.log(pairs([5, 2, 3, 7, 6, 4, 9, 8], 5));
