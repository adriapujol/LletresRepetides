const name = ['A', 'D', 'R', 'I' , 'A', 3];

for (item in name) {
    let letter = name[item];
    if (typeof letter !== 'string') {
        console.log(`Els noms de persones no contenen el número: ${letter}`);
    } else if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
        console.log(`He trobat la VOCAL: ${letter}`);
    } else {
        console.log(`He trobat la CONSONANT: ${letter}`);
    }
}