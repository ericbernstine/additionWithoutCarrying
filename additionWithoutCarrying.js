function additionWithoutCarrying(a, b) {
  let result = '';
  if (a == 0 && b == 0) {
    return 0
  }

  while (a > 0 || b > 0) {
    let lastDigA = a % 10;
    let lastDigB = b % 10;

    let x = lastDigA + lastDigB;

    if (x >= 10) {
      x = x - 10;
    }

    let test = x.toString()
    result += test

    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  result = result.split("").reverse().join("");
  return parseInt(result);


}
