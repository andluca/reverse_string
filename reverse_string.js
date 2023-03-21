const reverseString = () => {
  const string = document.body.querySelector("#string").value;

  var splitedString = string.split('');
  var arrayLenght= splitedString.length;
  var rightIndex = arrayLenght-1;
  var leftIndex = 0;

  while (leftIndex < rightIndex) {
    
    console.log(leftIndex)
    console.log(rightIndex)
    rightIndex -=1;
    leftIndex +=1;
  }
  
   
};

const btn = document.body.querySelector(".btnString");
  
btn.addEventListener("click", reverseString);
