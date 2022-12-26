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