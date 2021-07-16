const adjacentElementsProduct = (inputArray) => {
  let resultArray = [];
  for (let x = 0; x <= inputArray.length - 2; x++) {
    let product = inputArray[x] * inputArray[x + 1];
    resultArray.push(product);
  }
  return Math.max(...resultArray);
};

let input = [2, 3, -5, -2, 4];
console.log(adjacentElementsProduct(input));

const alternatingSums = (inputArray) => {
  let resultArray = [];
  let team1 = 0;
  let team2 = 0;
  for (let x = 0; x <= inputArray.length - 1; x++) {
    if (x % 2 === 0) team1 += inputArray[x];
    else team2 += inputArray[x];
  }
  resultArray.push(team1);
  resultArray.push(team2);
  return resultArray;
};

let input2 = [60, 40, 55, 75, 64];
console.log(alternatingSums(input2));
