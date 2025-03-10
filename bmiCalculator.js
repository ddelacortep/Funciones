/*function bmiCalculator(weight, height) {
    if (bmi < 18.5) {
        return `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${bmi}, so you are overweight.`;
    }
}

bmiCalculator(87, 1.87); */

function bmiCalculator (weight, height) {
    var BMI =  Math.floor(weight/(height*height))
    if (BMI < 18.5){
        interpretation = 'Your BMI is' + BMI + ', so you are underweight.'
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        interpretation = 'Your BMI is ' + BMI + ', so you have a normal weight.'
    } else if (BMI > 24.9) {
        interpretation = 'Your BMI is ' + BMI + ', so you are overweight.';
    }
    return interpretation;
}

console.log(bmiCalculator(87, 1.85));