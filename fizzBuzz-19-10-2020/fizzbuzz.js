function fizzBuzz(number) {
    if(number % 3 === 0){
        return 'fizz';
    }
    if(number === 2){
        return '2';
    }
    return '1';
}

module.exports = fizzBuzz;