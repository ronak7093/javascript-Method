let sentence = 'The quick brown fox jumps over the lazy dog.'

// length
let lengthdata = sentence.length
console.log(lengthdata);

// lower case
let lowercaseSentence = sentence.toLowerCase()
console.log(lowercaseSentence);

//uppercase sentences 
let uppercaseSentence = sentence.toUpperCase()
console.log(uppercaseSentence);

// split 
let word = sentence.split(' ')
console.log(word);

// indexof
let foxIndex = sentence.indexOf('fox')
console.log(foxIndex);

// replace 
let newSentence = sentence.replace('lazy','active')
console.log(newSentence);

// EXAMPLES : 

let data = sentence.split(' ')
let wordLengths = data.map((words)=>{
    return words.length
})
console.log(wordLengths);

let text = "Hello, world!" 
let textresult = text.startsWith("Hello")
console.log(textresult);


let email = "john.doe@example.com"
let emailresult = email.substring(9)
console.log(emailresult);

let result = sentence.split(' ')
let mResult = result.map((element)=>{
    return element
})
let revstr = mResult.reverse();
let reversedSentence = revstr.join(' ')
console.log(reversedSentence);

let newSentences = sentence.replace(/the/i,'a')
console.log(newSentences);




