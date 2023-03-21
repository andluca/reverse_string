const reverseString = () => {
  const string = document.body.querySelector("#string").value;

  var splitedString = string.split('');
  var arrayLenght= splitedString.length;
  var rightIndex = arrayLenght-1;
  var leftIndex = 0;

  while (leftIndex < rightIndex) {
    
    temporaryIndex = splitedString[leftIndex]
    splitedString[leftIndex] = splitedString[rightIndex]
    splitedString[rightIndex] = temporaryIndex
    rightIndex -=1;
    leftIndex +=1;
  }
  
  var reverseString = splitedString.join('')
  alert(reverseString)
   
};

const btn = document.body.querySelector(".btnString");
  
btn.addEventListener("click", reverseString);
