function isDivisibleBy3(number) {
    return number % 3 === 0;
}

function isDivisibleBy5(number) {
    return number % 5 === 0;
}


function fizzBuzz(number) {
    if(isDivisibleBy3(number) && isDivisibleBy5(number)){
        return 'fizzbuzz';
    }
    if(isDivisibleBy5(number)){
        return 'buzz';
    }

    if(isDivisibleBy3(number)){
        return 'fizz';
    }
    
    return '' + number;
}

module.exports = fizzBuzz;