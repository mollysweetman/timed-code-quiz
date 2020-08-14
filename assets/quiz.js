



var testTime = 60;

setInterval(function(){
    testTime--;

    if (testTime >= 0){
        id = document.getElementById("testTime");
        id.innerHTML = testTime;

    }
    if (testTime === 0){
        id.innerHTML = "Test Complete";
   
    
    };

}, 1000);




// var seconds = document.getElementById("timer");
// var countdown = setInterval(function() {
//     seconds--;
//     document.getElementById("timer") = seconds;
//     if (seconds <= 0) clearInterval(countdown);
// }, 1000);