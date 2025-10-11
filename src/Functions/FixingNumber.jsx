const FixingNumber = (number, toFixed) => {
    if (number > 999999999) {
        const convertedToB = number / 1000000000;
        const addedLetterB = convertedToB.toFixed(toFixed) + 'B';
        return addedLetterB;
    } else if (number > 999999) {
        const convertedToM = number / 1000000;
        const addedLetterM = convertedToM.toFixed(toFixed) + 'M';
        return addedLetterM;
    } else {
        const convertedToK = number / 1000;
        const addedLetterK = convertedToK.toFixed(toFixed) + 'K';
        return addedLetterK;
    }
}

export default FixingNumber;