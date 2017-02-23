var start = 3;

function mush() {

console.log("I'm a mushroom lover");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }


    var newTotal = 2 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}
var start = 3;

function bac() {

console.log("I'm a Bacon lover");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }


    var newTotal = 3 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}

var start = 3;

function pep() {

console.log("I'm a pep lover");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }


    var newTotal = 1 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}

var start = 3;

function ham() {

console.log("I'm a ham lover");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }

    var newTotal = 2 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}

function CL() {
    console.log("CL");
     document.getElementById("tot").innerHTML = "0";
}
var start =3;
function order12() {
 document.getElementById("tot").innerHTML = "0";
}

var start =3;
function add1() {

    var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }

    var myInput = document.getElementById("ck").value;

    var newTotal = +myInput + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}
     function Order() {
            
            var myString = document.getElementById("order").value;
                var Order = myString.split(",");
            console.log(Order);
            for (var i=0; i<Order.length; i++) {
                    Order[i] = Order[i].trim();
                    console.log(Order[i]);
            }
     }