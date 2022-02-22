/* Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.

Edge cases: 
1- No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
2- An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
3- An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

Pseudocode:
process.argv o pass argument through node, slice no parameters
filter an array for numbers greater than 0 
filter an array to ignore NaN
set timeout 
*/

let alarmSign = process.argv.slice(2).filter(time => !isNaN(time)).filter(time => time >= 0);

alarmSign.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});
