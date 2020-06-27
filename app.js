


function getNumber(num) {
    var number = document.getElementById("number");

    number.value += num;

    console.log(number.value)

}


function clearHistory() {
    var number = document.getElementById("number");

    number.value = ""

    console.log("clear")
}

function resultOfCalculation() {

    var number = document.getElementById("number");

    number.value = eval(number.value);

    console.log("Result is " + " " + number.value);


}

function del() {

    var number = document.getElementById("number");


var a = number.value;

a = a.substring(0,a.length - 1);

number.value =  a;

  console.log(number.value);

}



