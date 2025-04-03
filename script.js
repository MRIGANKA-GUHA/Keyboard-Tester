let keyElement;
let keyName;                   //Declaring all variables
let keyCode;
let key;
function removingBg(keyElement) {
   keyElement.classList.remove("pressed");         //Removing the bgcolor of button
   };
window.addEventListener('keydown', function(k) 
   {
      k.preventDefault();
      keyName=k.key;
      keyCode=k.code;
      if(keyName=="Shift" && keyCode=="ShiftLeft"){
         keyElement=document.querySelector(".ShiftLeft");   
      }
      else if(keyName=="Shift" && keyCode=="ShiftRight"){
         keyElement=document.querySelector(".ShiftRight");   
      }
      else if(keyName=="Control" && keyCode=="ControlLeft"){
         keyElement=document.querySelector(".ControlLeft");  
      }
      else if(keyName=="Control" && keyCode=="ControlRight"){
         keyElement=document.querySelector(".ControlRight");   
      }          
      else if(keyName.length===1 && keyName.match(/[A-Z]/)){
         keyName=k.key.toLowerCase();
         keyElement = document.getElementById(keyName);   
      }
      else {
         keyElement = document.getElementById(keyName);
      }  

      if(keyElement){
         keyElement.classList.add("pressed");                       
      }
      let allButtons=document.querySelectorAll("button");
      allButtons.forEach(button =>{                                         //Remove all button style after a certain time
      setTimeout(function() {removingBg(button);},10000);
      })
   });
