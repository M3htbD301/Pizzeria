mainArray= []

function order_array()
{
    var Pizza_1 = document.getElementById("Input1").value;
    var Pizza_2 = document.getElementById("Input2").value;
    var Pizza_3 = document.getElementById("Input3").value;
    var Pizza_4 = document.getElementById("Input4").value;
    var Pizza_5 = document.getElementById("Input5").value;
    var Pizza_6 = document.getElementById("Input6").value;
    var Pizza_7 = document.getElementById("Input7").value;

    order_array.push(Pizza_1);
    order_array.push(Pizza_2);
    order_array.push(Pizza_3);
    order_array.push(Pizza_4);
    order_array.push(Pizza_5);
    order_array.push(Pizza_6);
    order_array.push(Pizza_7);

document.getElementById("finalOrder").innerHTML = order_array;
document.getElementById("SubmitButton").style.display = "none";
}
