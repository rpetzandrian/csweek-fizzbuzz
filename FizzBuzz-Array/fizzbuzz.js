const fizzBuzz = function (data) {
    // console.log('Silahkan ubah file fizzbuzz.js');
    for (let i = 0; i < data.length; i++) {
        let x = data[i]
        if (x % 3 === 0 && x % 5 === 0) {
            console.log('FizzBuzz')
        } else if (x % 3 === 0) {
            console.log('Fizz')
        } else if (x % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(x)
        }
    }
}

module.exports = fizzBuzz;