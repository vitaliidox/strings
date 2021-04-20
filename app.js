//Task 1

// let someText = 'abcdcba'
// function checkPalindrom(text){
//     someTextRev = text.split('').reverse().join('')
//     if(text == someTextRev){
//         return 'yes'
//     }else{return 'no'}
// }
// console.log(checkPalindrom(someText))

//Task2

// function getSum(text){
//     let arr = text.split('')
//     let currency = arr.indexOf("$")
//     let numbers = arr.splice(currency, 1)
//     let sum = 0;
//     for(let i = 0; i<arr.length;i++){
//         sum+=Number(arr[i])
//     }
//  console.log((sum)+""+numbers)
// }
// getSum('1$223')

//Task 3

// function zeros(numbers, lengthN, sign){
//     let num = numbers.toString().length
//     let arr = [numbers]
//     for(let i=num;i<lengthN;++i){
//         arr.unshift(0)
//     }
//     arr.unshift(sign) 
// console.log(arr.join(''))
// }
// zeros(123, 7, '+')

//Task4

// function comparison(str1, str2){
// return str1.toLowerCase() == str2.toLowerCase()? true:false
// }
// console.log(comparison('wfwf','wFwf'))