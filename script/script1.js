// pobieramy input
var calc = document.getElementById("calc");

// meat 7x
var chili1 = document.getElementById("chili1_add-sum7");

//papric 1x
var chili2 = document.getElementById("chili4_add-sum1");

calc.addEventListener("input", add);

function add() {
    let chili = Number(calc.value);
    //console.log(typeof(chili));
    let meat = chili*7;
    //console.log(meat);
    chili1.innerHTML = meat + "x";
    //console.log(chili1);

    let papric = chili*1;
    // chili2.innerHTML = "paprici jest:" + papric + "x";
    chili2.innerHTML = `paprici jest: ${papric} x`;


}