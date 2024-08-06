
type WinningCombinationsResult = [number, number[]][];


function call(lines: number[]): WinningCombinationsResult {

  // assigning variables
  const prizeSymbols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result: WinningCombinationsResult = [];
  let index: number = 0, symbol: number = 0, positions: number[] = [];

  // function to save results 
  const storeResult = function () {
    if (positions.length > 2) {
      result.push([symbol, positions]);
    }
    positions = [];
    symbol = 0;
  };

  //method for digesting combinations
  while (index < lines.length) {
    if (!symbol && prizeSymbols.includes(lines[index])) {
      symbol = lines[index];
    }

    if (lines[index] == 0 || lines[index] == symbol) {
      positions.push(index);
    } else if (prizeSymbols.includes(lines[index])) {
      storeResult();
      index--;
      while (!lines[index]) {
        index--;
      }
    } else {
      storeResult();
    }
    index++;
  }

  storeResult();

  return result;
}
export const WinningCombinations = { call };
