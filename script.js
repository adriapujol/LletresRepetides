const fase1 = () => {
    const name = document.getElementById('name').value.split('');
    if (name == null || name == '') {
        alert('The name field is empty');
    } else {
        for (letter in name) {
            console.log(name[letter]);
        }
    }
}

const fase2 = () => {
    const name = document.getElementById('name').value.split('');
    if (name == null || name == '') {
        alert('The name field is empty');
    } else {
        for (item in name) {
            let letter = name[item];
            if (typeof letter !== 'string' || !isNaN(letter)) {
                console.log(`Els noms de persones no contenen el número: ${letter}`);
            } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]/.test(letter)){
                console.log(`Els noms no contenen caràcters com aquest: ${letter}`);
            } else if (noAccents(letter) === 'A' || noAccents(letter) === 'E' || noAccents(letter) === 'I' || noAccents(letter) === 'O' || noAccents(letter) === 'U') {
                console.log(`He trobat la VOCAL: ${letter}`);
            } else {
                console.log(`He trobat la CONSONANT: ${letter}`);
            }
        }
    }
}


const fase3 = () => {
    const name = document.getElementById('name').value.split('');
    if (name == null || name == '') {
        alert('The name field is empty');
    } else {
        let letter_count = {};
        name.map(letter => {
            if (typeof letter !== 'string' || !isNaN(letter) || !/^[A-Za-zÀ-ÖØ-öø-ÿ]/.test(letter)) {
            } else if (letter_count[noAccents(letter)] === undefined) {
                letter_count[noAccents(letter)]=1; 
            } else {
                letter_count[noAccents(letter)] += 1;
            }
        });
        console.log(letter_count);
    }
}

const fase4 = () => {
    const name = document.getElementById('name').value.split('');
    const surname = document.getElementById('surname').value.split('');
    if (name == null || name == '') {
        alert('The name field is empty');
    } else if (surname == null || surname == '') {
        alert('The surname field is empty');
    } else {
        let full_name = [];
        full_name = name.concat(' ', surname);
        console.log(full_name);
    }
}
const noAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();


document.getElementById('fase1').addEventListener('click', fase1);
document.getElementById('fase2').addEventListener('click', fase2);
document.getElementById('fase3').addEventListener('click', fase3);
document.getElementById('fase4').addEventListener('click', fase4);