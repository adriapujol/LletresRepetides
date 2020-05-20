const name = ['A', 'D', 'R', 'I' , 'A'];

let letter_count = {};

name.map(letter => {
    if (letter_count[letter] === undefined) {
        letter_count[letter] =1; 
    } else {
        letter_count[letter] += 1;
    }
});

console.log(letter_count);