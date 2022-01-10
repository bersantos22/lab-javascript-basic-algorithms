// Iteration 1: Names and Input
// 1.1
let hacker1 ='Bernardo';
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
let hacker2 = 'Ronaldo';
//1.4
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}



// Iteration 3: Loops
//3.1 
hacker1= hacker1.toUpperCase();
console.log(hacker1.split(''));

//3.2
let str ='';
for(let i = hacker2.length - 1;i>= 0 ; i--){
    str+=hacker2[i];
}
console.log(str);

// ||
console.log(hacker2.split('').reverse().join(''));

//3.3

let arr = [hacker1, hacker2];
arr.sort();
// console.log(arr);
if(arr[0]== hacker1){
console.log("The driver's name goes first.");
} else if(arr[1]== hacker2){
    console.log("Yo, the navigator goes first definitely");
} else if (arr[0]==arr[1]){
    console.log("What?! You both have the same name?");
}

// Bonus 1


let lorem = `Lorem ipsum dolor sit amet, eu tollit consulatu sed, sea sanctus instructior an. Eam maiestatis mnesarchum eu. Sensibus splendide mel ei, at sit error appellantur. Insolens partiendo pro ut.Tractatos efficiendi quo no, nullam tibique pertinacia at sed. Cum vidit patrioque ex, graeci expetendis cum ea, ut debet lobortis vim. 
Pri aliquip similique definiebas ad. Ex labores euripidis ullamcorper sed. Quas animal duo et. Viris antiopam assueverit his an, sit nonumy audiam eu, melius vidisse persius ex eam. Delicata partiendo usu ex. 
Id cum dicunt percipitur referrentur, et vel ignota nostro utroque ut. Has ei adhuc singulis dissentiet. Graeci semper id pro.`;
const arrTeste =[];


for(i=0;i<lorem.length;i++){
    arrTeste.push(lorem[i])
}
let cont2=1;
for(i=0;i<arrTeste.length;i++){
  if(arrTeste[i]===' '){
    cont2++;
  }
}
console.log (`Number of words is ${cont2}`);

let cont =0;
for(i=0;i<arrTeste.length;i++){
    if(arrTeste[i]===' ' && arrTeste[i+1]==='e' && arrTeste[i+2]==='t' || arrTeste[i]===' ' && arrTeste[i+1]==='e' && arrTeste[i+2]==='t'&& arrTeste[i+3]===' '){
        cont++;
    }
}
console.log(`The number of Latin word 'et' is ${cont}`);


//bonus 2
/*
let phraseToCheck ='taco cat';
phraseToCheck.split();
console.log(phraseToCheck);

let str2 ='';
for(let i = phraseToCheck.length - 1;i>= 0 ; i--){
    str2+=phraseToCheck[i];
}
console.log(str2);
if(phraseToCheck===str2){
    console.log("IT'S A PALINDROME!");
}else{
    console.log("It's not a palindrome");
}
*/


let phraseToCheck ='reviver';
/*phraseToCheck= phraseToCheck.split('');
console.log(phraseToCheck);

for(let i = 0; i < phraseToCheck.length; i++){
if(phraseToCheck[i]===''){
  delete phraseToCheck[i];  
}
}
console.log(phraseToCheck)*/

let str2 ='';
for(let i = phraseToCheck.length - 1;i>= 0 ; i--){
    str2+=phraseToCheck[i];
}
console.log(str2);

if(phraseToCheck===str2){
    console.log("IT'S A PALINDROME!");
}else if(phraseToCheck!==str2){
    console.log("It's not a palindrome");
}

// Não conssegui tirar o espaço no meio de frases que são palindromes :( - só roda se for uma palavra que é um palindrome.