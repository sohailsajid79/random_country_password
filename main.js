const lowcaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'x', 'z']
const uppcaseAlphabet = []
const specialChars = ['+', '.', '!', '^', '~', '*', '?', '@', '$', '%']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const countries = ['Afghanistan', 'Bangladesh', 'Cambodia', 'Denmark', 'Ecuador', 'Fiji', 'Gabon', 'Haiti', 'Iceland', 'Jamaica', 'Kazakhstan', 'Laos', 'Macau', 'Namibia', 'Oman', 'Pakistan', 'Qatar', 'Romania', 'Senegal', 'Taiwan', 'Uganda', 'Vietnam', 'Yemen', 'Zambia']

// looping for uppercase alphabet
for (let i = 0; i < lowcaseAlphabet.length; i++){
    uppcaseAlphabet.push(lowcaseAlphabet[i].toUpperCase())
}

// generate random number from 0-16
const randomNum = () => {
    return Math.floor(Math.random()*16)
}

function randomise (arr) {
    arr.sort(() => Math.random()- 0.5)
}

// pushing lowcaseAlphabet, uppcaseAlphabet, specialChars, numbers, countries into the function and joining them together to produce random password 
const genPassword = (length=1, charLength) => {
    const password = []
    for (let i = 0; i <=length -1; i++) {
        password.push(randomNum()),
        password.push(lowcaseAlphabet[randomNum()]),
        password.push(uppcaseAlphabet[randomNum()]),
        password.push(specialChars[randomNum()]),
        password.push(numbers[randomNum()]),
        password.push(countries[randomNum()]),
    
    randomise(password)
    const passwrd = password.join('')
    console.log(`Your random generated password is: ${passwrd.slice(0, charLength)}`)
}
}
// calling the function
genPassword()

// output example: Your random generated password is: Laos^Hn1
