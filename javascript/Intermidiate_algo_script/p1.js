function sumAll(arr) {
    if(arr[0] > arr[1]){
      let sum=0;
      for(let i=arr[1] ; i<=arr[0];i++)
        sum+=i;
      return sum;
    }
    else{
      let sum=0;
      for(let i=arr[0] ; i<=arr[1];i++)
        sum+=i;
      return sum;
    }
  }
  // iske ek inner function bhi bana ke kar sakte the repeatation kam ho
  /* function inner(a,b){
        let sum =0;
        for(let i=a;i<b;i++)
            sum += i;
        return sum;
  }
    fir isko call kar lete 
    if(arr[0] > arr[1])
        ans = inner(arr[1] , arr[0]);
    else
        ans = inner(arr[0] , arr[1]);
    return ans;
  */
  sumAll([1, 4]);
  // har bar arr me pehle chhota ele ho esa jaruri nai hai

  function diffArray(arr1, arr2) {
    const newArr = [];
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
          newArr.push(arr1[i]);
        }
      }
      for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
          newArr.push(arr2[i]);
        }
      }
  
    return newArr;
  }
  // yaha bhi esa kar sakte the 
  /*
    function bana sakte the ke 
    function inner(a, b) {
        for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
        }
    }
    fir isko call kar lete do bar 
    inner(arr1,arr2);
    inner(arr2,arr1);
  */
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    // pehla vala array hai uske siva kitne hai 
    // kya hai use store kare bina nai jan skte
    // to hamare pass argument object hai jo hame help karta hai 
    // object.value(arguments) - yaha [0] do to first
    // ese array ki tarah kam karta hai 
    // sabhi dedi arg to ab hame array ke bad vali access karni hai
    // to slice karke array bana liya
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      // initialize kiya ke value nai hai
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
          // fir check kiya ke kahi hamne banaye array me hai to nai
          // hoga to true bol diya
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
        // jo nai hai fir to hamara jo array ban raha hai usme store karlo
      }
    }
    return filteredArray;
    // or return to karna hi hai;
  }

  function whatIsInAName(collection, source) {

    const souceKeys = Object.keys(source);
    console.log(souceKeys);
    // ye .keys() hame source me diye hue keys return karke deta hai
    // ham ise collect karke check karenge
    // filter the collection
    return collection.filter(obj => {
      // main return karenge kon kon ye keys rakhta hai
      for (let i = 0; i < souceKeys.length; i++) {
        // loop dalke sabhi check karge na
        if (!obj.hasOwnProperty(souceKeys[i]) 
        // ye bolta hai ke hamri collected key collection me nai hai
        || obj[souceKeys[i]] !== source[souceKeys[i]])
        // or uski value same nai hai fir wo false karega return
         {
          return false;
        }
      }
       // agar dono match ho jaye fir true return karega
      return true;
    });
    // ye call back function tha true return karega
    // tabhi filter fucntion filter karega kisko rakhna
    // kisko nai rakhna 
  
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  // source vala object jis colllection me ho 
  // use return karna hai

  function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }
  // space and capital letter se alag karne ke lie regex = /\s|_|(?=[A-Z])/
  // fir join and then tolowercase()
  console.log(spinalCase('This Is Spinal Tap'));

  function translatePigLatin(str) {
    let extraStr = "";
    let vowel = ['a' , 'e' , 'i' , 'o' , 'u'];
    let flag = true,i;
    for(i=0;i<str.length;i++)
    {
      if(vowel.includes(str[i])) 
      // pehle check kiya ke vowel hai to loop me se bahar nikalo
        break;
      else{
        extraStr+=str[i]; 
        // agar nai to agale vale const ko extra me le lo
        flag = false;
        // or janda farka do ke ab isme badlav aa gaya hai
      }
    }
    str = str.slice(i);
    // ye slice hame karna pada ke age se character nikalne hai na
    // to i to hame collect kiya uspe se 
    // or vaha se jitni string ho slice le ke usi ko de de
    if(flag)
      extraStr+="w";
      // agar janda farka nai fota to w bhi add kar dene ka
    extraStr+="ay";
    // ye to add karna hi hai
    return (str+extraStr);
    // baki sab aake concat karke return karna hai bas
  }
  
  console.log(translatePigLatin("consonant"));

  function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      // regex banaya ke pehla (^)letter capital hai ki nai
      after = after[0].toUpperCase() + after.substring(1);
      // to after string ka pehla letter cap kardo
    } else {
      after = after[0].toLowerCase() + after.substring(1);
      // to after string ka pehla letter small kardo
  
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  
  function pairElement(str) {
    let ans={
      A:'T',
      T:'A',
      G:'C',
      C:'G'
    }
    // dna ka pair hote hai 
    // to key and its value se object bana liya 
    // ab char dekh ke usko array me dalna hai
    return str.split("").map(a => [a,ans[a]]);
    // split se arrray me split karega str ko
    // fir map se 1d se 2d me badlenge or element ko uske sathi se mila denge
  }
  
  pairElement("GCG");

  function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      // ham pehle ascii value unicode dhundh lenge
      // usko compare karenge
      if (charCode !== str.charCodeAt(0) + i) {
        // current ke unnicode ko
        // pehle vale + i unicode dono same na ho
        // to wo char return kardo
        return String.fromCharCode(charCode - 1);
      }
    }
    // varna undefined to hai hi
    // ku6 return na karo to bhi return undefined hota hai
  }
  
  // test here
  console.log(fearNotLetter("abce"));

  function uniteUnique(arr) {
    let arg = [...arguments];
    // all arg me jitne array aaye wo save karne padenge
    // 2d array banega
    let ans = [];
    for(let i=0;i<arg.length;i++)
    {
      for(let j=0;j<arg[i].length;j++)
      {
        if(!ans.includes(arg[i][j]))
        // check karenge ke ans vala array bana rahe he 
        // usme hame naye array mese add karna hai ki nai
        // haan to push kardo 
          ans.push(arg[i][j]);
      }
    }
    return ans;
    // or ans return kardo
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  
  // pehle array mese non repeating value daldo
  // fir sab array mese repeat na hote hue element add karte chalo;

  function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // html ki entities ko object me store karli
    // char nikalke uske curresponding
    // values dalke return kardo 
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  // map me jo badlna hai wo to object se badaldenge
  // but dusra sab to vese ka vesa rakhna hai to 
  // or me entity return kardo
  // test here
  console.log(convertHTML("Dolce & Gabbana"));


  function sumFibs(num) {
  let pichala = 0;
  let abhika = 1;
  let jochahie = 0;
  while (abhika <= num) {
    if (abhika % 2 !== 0) {
      jochahie += abhika;
    }
    abhika += pichala;
    pichala = abhika - pichala;
  }
// fibo ki tarah pehle do element define karke
// usse fibo ki line banani hai
// par as a twist jo odd number dikhe use khich ke apne sum me dalte jao
// jochahie wo 6in lo
// abhika jo hai wo possition dikhata hai ke isse zyada nai lane hame num me
  return jochahie;
}

// test here
console.log(sumFibs(4));

function sumPrimes(num) {
  let isPrime = Array(num + 1).fill(true);
  // hame sieve ke tarah prime number dhundhne hai
  // to c++ me to bool ka or defined size ka array ban jaega
  // isme Array object ka use karke or usko bool value true fill karke is prime name ka array define kiya
  // isprime is a boolean array
  // isko batana padega ke 0 and 1 prime nai hai 
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
    //pehla for loop bolega ke le is number ko check kar 
    // jo pehle se ise prime bola gaya to iske sare avayav ko non-prime bana dega
    // agar nai bola to to skip hi karna hai
  }
  let sum=0;
  for(let i=0;i<=num;i++)
    if(isPrime[i])
      sum+=i;
  return sum;
}

console.log(sumPrimes(10));