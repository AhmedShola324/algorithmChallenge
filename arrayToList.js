let myList ={
  value: 1, 
  rest: {value: 2, 
         rest: {value: 3, 
                rest: null }
        }
};

function arrayToList(obj){
  
  return Object.values(obj);
}  

console.log(arrayToList(myList))
