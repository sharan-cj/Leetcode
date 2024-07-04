// L13. Roman to Integer
const romanToInt = function (s) {
  const symbolValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let val = symbolValue[char];

    if (char === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
      val = -1;
    }
    if (char === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
      val = -10;
    }
    if (char === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
      val = -100;
    }

    result += val;
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
