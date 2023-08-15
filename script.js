//get the button
let mybutton = document.getElementById("myBtn");

//when user scroll down 20px from the top of the document, show the button
window.onscroll = function(){
   scrollFunction()
};

function scrollFunction(){
   if(document.body.scrollTop > 20||document.documentElement.scrollTop > 20){
      mybutton.style.display = "block";
   }
   else{
      mybutton.style.display = "none"
   }
}

//when user clicks on the botton, scroll to the top of the document
function topFunction(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

//date

date = document.getElementById("date")

date1 = new Date()
d = date1.getDate()
m = date1.getMonth()
y = date1.getFullYear()
date.innerHTML =`${d}-${m+1}-${y}`

