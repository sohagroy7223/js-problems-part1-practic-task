function longestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// const sent = "I am learning Programming to become a programmer";
// const result = longestWord(sent);
// console.log(result);

function bigword(sentence) {
    const words = sentence.split(" ");
    let longer = "";
    for (const word of words) {
        if (word.length > longer.length) {
            longer = word;
        }
    }
    return longer;
}
const sentence = "I am learning Programming to become a programmer";
const result = bigword(sentence);
console.log(result);
