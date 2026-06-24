//String 
let word1:string ="Hello"
 let count:number =0
 //console.log(word1.split(""))
 let vowelString : string []=[]
 word1.split("").forEach(vowel =>{
     if(vowel.toLowerCase() == "a" ||
     vowel.toLowerCase() =="e"||
     vowel.toLowerCase() =="i"||
     vowel.toLowerCase() =="o"||
     vowel.toLowerCase() =="u"||
     vowel.toLowerCase() =="y")
     {
          count +=1
          vowelString.push(vowel)
     }
 })
         
console.log(count)
console.log(vowelString)
console.log(vowelString.length)