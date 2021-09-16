# js-fundamental

# 1- Given  array >> [50,20,10,100], input : 100, Output>> second minium possible pair i.e [50,50];
>>> https://jsfiddle.net/x4gcymn0/1/
Solution >>>
<pre>
var arr = [50,20,10,100];
arr.sort((a,b)=> b-a);
console.log(arr);
var input = 10;
let matched = false;
let myArr = [input];
  const at=arr.reduce((arr,obj)=> {
     if(input > obj) {
      if(!matched && !(input % obj) && input/obj && input/obj !==1)
        {
        	matched = true;
          arr = [];
          console.log(obj,input/obj,'awanish');
          myArr = Array(input/obj).fill(obj);
          return myArr;
        } else {
        	return myArr;
        }
     } else {
     return myArr
     }
   }
  );
  console.log(input,arr,'result',at);
  </pre>



