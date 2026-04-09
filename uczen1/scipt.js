// 7. Licznik wystąpień
// Zlicz ile razy każda liczba występuje w tablicy.
// 👉 [1,2,2,3,3,3] → {1:1, 2:2, 3:3}

var arr = [1, 2, 2, 3, 3, 3];
var count = {};

for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}
console.log(count);

// ===== //

// 8. Palindrom
// Sprawdź czy słowo jest palindromem (czytane tak samo od przodu i tyłu).

var word = "kajak";
var isPalindrome = true;

for (var i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

// ===== //

// 9. Suma cyfr liczby
// Napisz funkcję, która zwraca sumę cyfr liczby.
// 👉 1234 → 10

function sumOfDigits(num) {
    var sum = 0;
    var numStr = num.toString();
    
    for (var i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    
    return sum;

}
console.log(sumOfDigits(1234));

// Bez STRING'A

function sumOfDigits2(num) {
    var suma = 0;

    while (num > 0) {
        suma += num % 10;
        num = Math.floor(num / 10);
    }
    return suma;
}
console.log(sumOfDigits2(1234));