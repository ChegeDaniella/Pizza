$(document).ready(function(){
    $(".slide").click(function(){
        $(".simim").slideToggle();
    });

});

function orderPizza(){
var pSize = parseInt(document.getElementById(`size`).value);

var pCrust = parseInt(document.getElementById(`crust`).value);

var pTopping = parseInt(document.getElementById(`topping`).value);

var pizzaSize=["Small","Medium","Large"];
var pizzaCrust=["Thin","Thick","Stuffed"];
var pizzaTopping = ["Onion", "Sausage", "Bacon"];
var p_size,p_crust,p_topping;

var total=pSize+pCrust+pTopping;
alert("This is your initial total"+" "+total)
    
if (pSize == 500){
    p_size=pizzaSize[0];
}else if (pSize == 800){
        p_size = pizzaSize[1];
}else if(pSize == 1000){
        p_size = pizzaSize[2];
}
if(pCrust == 300){
    p_crust = pizzaCrust[0];
}else if(pCrust == 200){
    p_crust = pizzaCrust[1];
}else if(pCrust == 100){
    p_crust = pizzaCrust[2];
}
if(pTopping==120){
    p_topping = pizzaTopping[0];
}else if(pTopping==160){
    p_topping = pizzaTopping[1];
}else if(pTopping==190){
    p_topping = pizzaTopping[2];
}
var more=parseInt(prompt("How many pizzas would you like"))
total=total+more
        var delivery = confirm("Do you want your Pizza delivered to you?");
        if(delivery){
            total=total+150;
            var location = prompt("Please enter your location");
            alert(p_size+" "+ "with a "+p_crust+" and with "+p_topping+"will be delivered to "+location + " at Ksh 150.Total cost is "+total);
            }
        
    };


