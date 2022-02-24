/**
 * Note.....
 * This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

 */

 /*************  SOLUTION TO THE QUESTION ***********/
let arrayOfexcludedNumbers = [];
    function solution(A){
         for(let x = 1; x < 100000; x++){
               let valid = checkAvailability(A, x);
               if(!valid){
                    arrayOfexcludedNumbers.push(x);
               }
          }
        let min = Math.min(...arrayOfexcludedNumbers);
        console.log(min);
        return min;
    }
     function checkAvailability(arrayToCheck, searchValue) {
          return arrayToCheck.some((arrayValues) => { 
               return searchValue === arrayValues;
          });
     }
    solution([1, 2, 3, 8, 5, 6, 7]);
