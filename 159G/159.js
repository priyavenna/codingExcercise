//reads an array of words and and outputs the words that have the same words or characters

let wordmatcharr = ['war','eat','donut','pizza','raw','ate','apizz'];
function sortString(str){
var arr = str.split('');
var temp;
for (var i = 0; i < arr.length; i++) {
for (var j = i+1; j < arr.length; j++) {
//it will do the swap based on ASCII character set
if (arr[i] > arr[j]) {
temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
let res = arr.join('');
return res;
}
let sortedArray = wordmatcharr.map(sortString);
console.log(`Input array: ${wordmatcharr}`); //Array given as input
console.log(`Sorted array: ${sortedArray}`); //array of strings sorted based on ASCII character set

let results = [];
let firstElement = null;
for (i = 0; i < wordmatcharr.length; i++) {
//Comparing first element of the sorted array with rest
firstElement = sortedArray[i];
for(j = i+1; j < wordmatcharr.length; j++){
// if the element is marked as empty skip the comparision

if (sortedArray[j] != '' && firstElement === sortedArray[j]) {

//if the element is already stored in results skip the duplication
if(sortedArray[i] != '') {

results.push(wordmatcharr[i]);
}
//store the matched string in results array
results.push(wordmatcharr[j]);
//once found the match make it empty
sortedArray[i] = '';

sortedArray[j]= '';
}
}
if (results.length > 0) {
console.log(`${results}`);
}
results = [];
}
//Display the non-matching strings
for(i=0; i< wordmatcharr.length; i++) {

if (sortedArray[i] != '') {

console.log(`${wordmatcharr[i]}`);
}
}