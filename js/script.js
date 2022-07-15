// price range slider calculator function
const rangein = document.querySelectorAll(".range-in input");

let displayOne = document.getElementById('range1');
let displayTwo = document.getElementById('range2');

const progress = document.querySelector('.slider .pro');
let priceGap = 1000;

rangein.forEach(input =>{
   input.addEventListener("input", e =>{
       let minVal = parseInt(rangein[0].value),
       maxVal = parseInt(rangein[1].value);

      if(maxVal - minVal < priceGap){
          if(e.target.className === "range-min"){
               rangein[0].value = maxVal - priceGap;
          }else{
               rangein[1].value = minVal + priceGap;
          }
      } else{
           displayOne.textContent = '$ '.concat(minVal);
           displayTwo.textContent = '$ '.concat(maxVal);
           displayOne.style.left = (minVal/2) + '%';
           displayTwo.style.right =(maxVal/2) + '%';
           progress.style.left = (minVal / rangein[0].max) * 100 + "%";
           progress.style.right = 100 - (maxVal / rangein[1].max) * 100 + "%";
      }
   });
});


    //responsive footer dropdown button
    function dropDownFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
  }

     // Close the dropdown if the user clicks outside of it
     window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
     }
     }
     }
}