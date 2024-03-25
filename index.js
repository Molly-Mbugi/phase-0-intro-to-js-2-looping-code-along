function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
}

// Function to count down from a provided number to zero
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
