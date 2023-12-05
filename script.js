const text = `The aim of the Lemme project is to introduce and develop the usage of formal methods to construct safe software. We particularlyparticularlyparticularlyparticularlyparticularlyparticularlyv address scientific computing software (computer algebra, computer arithmetics) and software for smart cards. `;  

const repeatedLetter = (input) => {
  const arrayFromInput = input.toLowerCase().replace(/[^a-z0-9]/ig, '').split('');
  const uniqueLetters = [...new Set(arrayFromInput)];

  let theLargestValue = 0;
  let theMostRepeatedLetter = '';

  uniqueLetters.forEach(letter => {
    const currentValue = arrayFromInput.filter(a => a === letter).length;

    if(theLargestValue < currentValue) {
      theLargestValue = currentValue;
      theMostRepeatedLetter = letter;
    }
  })

  return theMostRepeatedLetter;
}

console.log(repeatedLetter(text))