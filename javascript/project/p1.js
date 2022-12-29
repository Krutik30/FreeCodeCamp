function palindrome(str) {
    let str2 = str.replace(/[_]|\W/g,"").toLowerCase();
    let a=0;
    console.log(str2);
    for(let i=0;i<=str2.length/2;i++)
    {
      if(str2[i] != str2[str2.length-1-i])
        return false;
    }
    return true;
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));