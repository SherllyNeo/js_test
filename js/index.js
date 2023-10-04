
var count = 0;
function count_inc() {
    var counter = document.getElementById("count");
    count += 1;
    counter.innerHTML = "You have clicked " + count + " many times";
    console.log("you have clicked",count);
    
}
