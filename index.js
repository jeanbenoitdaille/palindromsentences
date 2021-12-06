function isPalindrome(sentence) {
    let cleanedSentence = sentence.toLowerCase().replace(/ /g, "");
    return cleanedSentence.split("").reverse().join("") === cleanedSentence;
}
 
let resultat = isPalindrome("Un roc cornu");