//Checks the user's age and outputs if they can drive the car.
function checkDriverAge(){
    let age = prompt("HELLO USER, HOW MANY YEARS HAVE YOU BEEN A HUMAN?");
    if(age == 18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }else if(age > 18){
        alert("Powering On. Enjoy the ride!");
    }else{
        alert("Sorry, you are too young to drive this car. Powering off");
    }
}

checkDriverAge();