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