function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const cash of str) {
        if (vowels.includes(cash)) {
            count++;
        }
    }
    return count;
}
// const names = "education";
// const result = countVowels(names);
// console.log(result);

function countVowel(str) {
    const vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    str.toLowerCase();
    for (const cash of str) {
        if (vowel.includes(cash)) {
            count++;
        }
    }
    return count;
}
const sentence = "amar sonar bangla";
const result = countVowel(sentence);
console.log(result);
