/*A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400. **/


function isLeap(year) {
    
    if (year % 4 === 0) {
        if(year % 100 === 0) {
            if (year % 400 === 0){
                return "is a leap year"
            } else {
                return "Is not a leap year"
            }
        } else {
            return"Is a leap year"
        }
    }else {
        return "is not a leap year"
    }
} 

let result = isLeap(2000);

console.log(result);


