//13. Roman to Integer

var romanToInt = function(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let result = 0
  s.split('').forEach((romanNum, i) => {
    if (map[romanNum] < map[s[i + 1]]) {
      result -= map[romanNum]
    } else {
      result += map[romanNum]
    }
  })
  return result
};

console.log(romanToInt("LVIII"))
//console.log(romanToInt("MCMXCIV"))
//console.log(romanToInt("V"))



var romanToInt1 = function(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let prev = s[i - 1];
    switch (s[i]) {
      case "I":
        sum += 1;
        break;
      case "V":
        sum = prev === "I" ? sum + 3 : sum + 5;
        break;
      case "X":
        sum = prev === "I" ? sum + 8 : sum + 10;
        break;
      case "L":
        sum = prev === "X" ? sum + 30 : sum + 50;
        break;
      case "C":
        sum = prev === "X" ? sum + 80 : sum + 100;
        break;
      case "D":
        sum = prev === "C" ? sum + 300 : sum + 500;
        break;
      case "M":
        sum = prev === "C" ? sum + 800 : sum + 1000;
        break;
    }
  }
  return sum;
}

console.log(romanToInt1("IV"))
