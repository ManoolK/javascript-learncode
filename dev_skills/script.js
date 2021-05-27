// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
CC # 5.1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
*/

// 1. Understand the problem
// - Receieved an array of maximum temperatires
// - What is the X days? - index + 1
// - Output is a string: "<temp>ºC in <day_number> days", separated by "..."

// 2. Breaking up into sub-problem
// - transform array into string
// - add day numbers
// - add separator "..." between elements and at the start and at the end of the string
// - log result to console

const printForecast = function (arr) {
  let result = '...';
  for (let i = 0; i < arr.length; i++) {
    result += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log(result);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
